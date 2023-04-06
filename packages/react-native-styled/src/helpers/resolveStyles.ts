import { StyledParams, StyledComponentProps, Stylesheet } from "../types";
import isCurrentColor from "./isCurrentColor";
import resolveStyleProperty from "./resolveStyleProperty";

/**
 * Resolve styles from params
 */
export default function resolveStyles<P extends StyledComponentProps<P["style"]>>(
    params: StyledParams<P>,
    styles: Stylesheet<P["style"]>,
): P["style"] {
    const style = {} as any;
    if (typeof styles === "object" && styles) {
        // Casting styles to any is safe as we already checked it is an object
        const { color, ...restStyles } = styles as any;

        // Color has to be handled separately first in order to resolve currentColor
        if (isCurrentColor(color)) style.color = color(params, style, "color");

        for (const property in restStyles)
            style[property] = resolveStyleProperty(
                params,
                style,
                property,
                (styles as any)[property],
            );
    }

    return style;
}
