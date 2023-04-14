import { StyledComponentProps, StyledParams, Stylesheet } from "../types";
import isAccessor from "./isAccessor";

/**
 * Resolves a style property. I.e. currentColor to the actual currentColor
 * Also resolves nested accessors
 * @param params Styled params
 * @param styles Component styles
 * @param property Style property
 * @param value Style property value (a normal value "red" or an accessor "currentColor")
 * @returns The resolved value of the style property
 */
export default function resolveStyleProperty<P extends StyledComponentProps<P["style"]>>(
    params: StyledParams<P>,
    styles: Stylesheet<P["style"]>,
    property: string,
    value: any,
): void {
    let resolvedValue = value;
    let bypass = false;

    while (!bypass && isAccessor(resolvedValue)) {
        try {
            resolvedValue = resolvedValue(params, styles, property);
        } catch (_) {
            bypass = true;
        }
    }

    return resolvedValue;
}
