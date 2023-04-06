import { Accessor } from "./accessors.types";
import createAccessor from "./createAccessor";

export type FromPropsAccessor<P, K extends keyof P, R = P[K]> = Accessor<R>;

export type FromProps<P> = <K extends keyof P, R = P[K]>(
    key: K,
    fn?: (value: P[K]) => R,
) => FromPropsAccessor<P, K, R>;

export default function fromProps<P, K extends keyof P, R = P[K]>(
    key: K,
    fn?: (value: P[K]) => R,
): FromPropsAccessor<P, K, R> {
    return createAccessor(function fromProps(params): R {
        const value = (params as any)[key];
        return fn ? fn(value as P[K]) : (value as R);
    });
}
