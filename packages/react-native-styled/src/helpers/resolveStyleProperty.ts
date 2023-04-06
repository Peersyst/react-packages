import { StyledComponentProps, StyledParams, Stylesheet } from "../types";
import isAccessor from "./isAccessor";

export default function resolveStyleProperty<P extends StyledComponentProps<P["style"]>>(
    params: StyledParams<P>,
    styles: Stylesheet<P["style"]>,
    property: string,
    value: any,
): void {
    let resolvedValue = value;
    while (isAccessor(resolvedValue)) resolvedValue = resolvedValue(params, styles, property);
    return resolvedValue;
}
