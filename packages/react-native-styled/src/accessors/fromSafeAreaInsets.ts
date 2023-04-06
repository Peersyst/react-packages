import createAccessor from "./createAccessor";
import { Accessor } from "./accessors.types";
import { EdgeInsets } from "react-native-safe-area-context";

export type FromSafeAreaInsetsAccessor<K extends keyof EdgeInsets, R = EdgeInsets[K]> = Accessor<R>;

export type FromSafeAreaInsets = <K extends keyof EdgeInsets, R = EdgeInsets[K]>(
    key: K,
    fn?: (value: EdgeInsets[K]) => R,
) => FromSafeAreaInsetsAccessor<K, R>;

export default function fromSafeAreaInsets<K extends keyof EdgeInsets, R = EdgeInsets[K]>(
    key: K,
    fn?: (value: EdgeInsets[K]) => R,
): FromSafeAreaInsetsAccessor<K, R> {
    return createAccessor(function fromSafeAreaInsets(params): R {
        const value = params.safeAreaInsets[key];
        return fn ? fn(value) : (value as R);
    });
}
