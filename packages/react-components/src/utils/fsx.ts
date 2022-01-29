import { PropsStyle } from "./types";
import { CSSProperties } from "react";

/**
 * Accepts a PropStyle (function that returns CSSProperties or CSSProperties) and returns the appropriate CSSProperties
 * @param sx PropStyle
 * @param props Props that can be used to compute the function PropStyle
 */
export function fsx<Props>(sx: PropsStyle<Props> | undefined, props: Props): CSSProperties | undefined {
    if (!sx) return undefined;
    if (typeof sx === "function") return sx(props);
    else return sx;
}
