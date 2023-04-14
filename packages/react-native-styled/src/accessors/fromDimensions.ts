import createAccessor from "./createAccessor";
import { Accessor } from "./accessors.types";
import { ScaledSize } from "react-native";

export type FromDimensionsAccessor<K extends keyof ScaledSize, R = ScaledSize[K]> = Accessor<R>;

export type FromDimensions = <K extends keyof ScaledSize, R = ScaledSize[K]>(
    key: K,
    fn?: (value: ScaledSize[K]) => R,
) => FromDimensionsAccessor<K, R>;

export default function fromDimensions<K extends keyof ScaledSize, R = ScaledSize[K]>(
    key: K,
    fn?: (value: ScaledSize[K]) => R,
): FromDimensionsAccessor<K, R> {
    return createAccessor(function fromDimensions(params): R {
        const value = params.dimensions[key];
        return fn ? fn(value) : (value as R);
    });
}
