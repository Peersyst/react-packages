import { Accessor } from "./accessors.types";
import createAccessor from "./createAccessor";

export type CurrentColorAccessor<R = string> = Accessor<R>;

export type CurrentColor<R = string> = (fn?: (color: string) => R) => CurrentColorAccessor<R>;

/**
 * Accesses the current color of the stylesheet. If currentColor property is defined, it will be used. Otherwise, the color property will be used. If color is not defined, #000 will be used.
 * @param fn Function to manipulate the current color.
 * @returns The accessor function.
 */
export default function currentColor<R = string>(
    fn?: (color: string) => R,
): CurrentColorAccessor<R> {
    return createAccessor(function currentColor(_, style, property): R {
        const currentColor = (style as any)?.currentColor;
        const color = (style as any)?.color;
        const resolvedColor =
            currentColor || (typeof color === "string" && property !== "color" ? color : "#000");
        return fn ? fn(resolvedColor) : (resolvedColor as R);
    });
}
