import { StyledParams, StyledComponentProps, Stylesheet } from "../types";
import resolveStyleProperty from "./resolveStyleProperty";

/**
 * Resolve styles from params I.e. currentColor to the actual currentColor
 * @param params Styled params
 * @param styles Component styles
 * @returns The resolved styles
 */
export default function resolveStyles<P extends StyledComponentProps<P["style"]>>(
    params: StyledParams<P>,
    styles: Stylesheet<P["style"]>,
): P["style"] {
    let style = {} as any;
    if (typeof styles === "object" && styles) {
        style = { ...styles };

        // Casting styles to any is safe as we already checked it is an object
        const { color, currentColor, ...restStyles } = style;

        // Resolve currentColor first
        if (currentColor)
            style.currentColor = resolveStyleProperty(params, style, "currentColor", currentColor);

        // Resolve color second so that other styles can use currentColor
        if (color) style.color = resolveStyleProperty(params, style, "color", color);

        for (const property in restStyles) {
            // If property is an object, resolve it recursively
            if (
                typeof style[property] === "object" &&
                !Array.isArray(style[property]) &&
                style[property] !== null
            ) {
                style[property] = resolveStyles(params, {
                    ...(!!currentColor && { currentColor }),
                    ...(!!color && { color }),
                    ...style[property],
                });
            }
            // Otherwise resolve it normally
            else style[property] = resolveStyleProperty(params, style, property, style[property]);
        }
    }

    return style;
}
