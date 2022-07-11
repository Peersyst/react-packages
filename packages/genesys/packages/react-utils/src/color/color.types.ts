export type ColorFormat = "rgb" | "rgba" | "hsl" | "hsla" | "color";
export type ColorValues = [number, number, number] | [number, number, number, number | string];
export type ColorSpace = "srgb" | "display-p3" | "a98-rgb" | "prophoto-rgb" | "rec-2020";

export interface ColorObject {
    type: ColorFormat;
    values: ColorValues;
    colorSpace?: ColorSpace;
}
