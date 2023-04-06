import { Accessor } from "./accessors.types";
import createAccessor from "./createAccessor";

export type CurrentColorAccessor<R = string> = Accessor<R>;

export type CurrentColor<R = string> = (fn?: (color: string) => R) => CurrentColorAccessor<R>;

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
