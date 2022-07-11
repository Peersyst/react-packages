//MUI Color utils

import { ColorFormat, ColorObject, ColorSpace, ColorValues } from "./color.types";

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value: number, min = 0, max = 1) {
    if (process.env.NODE_ENV !== "production") {
        if (value < min || value > max) {
            console.error(`The value provided ${value} is out of range [${min}, ${max}].`);
        }
    }

    return Math.min(Math.max(min, value), max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb(color: string) {
    color = color.substr(1);

    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
        colors = colors.map((n) => n + n);
    }

    return colors
        ? `rgb${colors.length === 4 ? "a" : ""}(${colors
              .map((n, index) => {
                  return index < 3
                      ? parseInt(n, 16)
                      : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
              })
              .join(", ")})`
        : "";
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A color object: {type: string, values: number[]}
 */
export function decomposeColor(color: ColorObject | string): ColorObject {
    // Idempotent
    if (typeof color !== "string") {
        return color;
    }

    if (color.charAt(0) === "#") {
        return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf("(");
    const type = color.substring(0, marker) as ColorFormat;

    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
        throw new Error(
            "Unsupported `%s` color. " +
                color +
                "\n" +
                "The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().",
        );
    }

    let values: ColorValues | string | string[] = color.substring(marker + 1, color.length - 1);
    let colorSpace;

    if (type === "color") {
        values = values.split(" ");
        colorSpace = values.shift() as ColorSpace | undefined;
        if (values.length === 4 && values[3].charAt(0) === "/") {
            values[3] = values[3].substr(1);
        }
        if (
            !colorSpace ||
            ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1
        ) {
            throw new Error(
                "MUI: unsupported `%s` color space." +
                    colorSpace +
                    "\n" +
                    "The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.",
            );
        }
    } else {
        values = values.split(",");
    }
    values = values.map((value) => parseFloat(value)) as ColorObject["values"];

    return { type, values, colorSpace };
}

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: ColorObject) {
    const { type, colorSpace, values: colorValues } = color;
    let values: string | string[] | number[] = [];

    if (type.indexOf("rgb") !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = colorValues.map((n, i) => (i < 3 ? parseInt(n.toString(), 10) : n) as number);
    } else if (type.indexOf("hsl") !== -1) {
        values[1] = `${values[1]}%`;
        values[2] = `${values[2]}%`;
    }
    if (type.indexOf("color") !== -1) {
        values = `${colorSpace} ${values.join(" ")}`;
    } else {
        values = `${values.join(", ")}`;
    }

    return `${type}(${values})`;
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function alpha(color: ColorObject | string, value: number) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === "rgb" || color.type === "hsl") {
        color.type += "a";
    }
    if (color.type === "color") {
        color.values[3] = `/${value}`;
    } else {
        color.values[3] = value;
    }

    return recomposeColor(color);
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
export function hslToRgb(color: string | ColorObject) {
    color = decomposeColor(color);
    const { values } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    let type = "rgb";
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === "hsla") {
        type += "a";
        rgb.push(values[3] as number);
    }

    return recomposeColor({ type: type as ColorFormat, values: rgb as ColorValues });
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
export function getLuminance(color: string | ColorObject) {
    color = decomposeColor(color);

    let rgb = color.type === "hsl" ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map((val) => {
        if ((color as ColorObject).type !== "color") {
            (val as number) /= 255; // normalized
        }
        return val <= 0.03928
            ? (val as number) / 12.92
            : (((val as number) + 0.055) / 1.055) ** 2.4;
    }) as ColorValues;

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function darken(color: string | ColorObject, coefficient: number) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf("hsl") !== -1) {
        color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf("rgb") !== -1 || color.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
            (color.values[i] as number) *= 1 - coefficient;
        }
    }
    return recomposeColor(color);
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function lighten(color: string | ColorObject, coefficient: number) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf("hsl") !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf("rgb") !== -1) {
        for (let i = 0; i < 3; i += 1) {
            (color.values[i] as number) += (255 - (color.values[i] as number)) * coefficient;
        }
    } else if (color.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
            (color.values[i] as number) += (1 - (color.values[i] as number)) * coefficient;
        }
    }

    return recomposeColor(color);
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function emphasize(color: string, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
