import { getAttribute } from "@peersyst/react-utils";
import { Theme } from "../theme";
import createAccessor from "./createAccessor";
import { FlattenedNestedKeys, DeepPick } from "@peersyst/react-types";
import { Accessor } from "./accessors.types";

type ThemeKey = FlattenedNestedKeys<Theme>;

// @ts-ignore Not excessively deep
export type FromThemeAccessor<K extends ThemeKey, R = DeepPick<Theme, K>> = Accessor<R>;

export type FromTheme = <K extends ThemeKey, R = DeepPick<Theme, K>>(
    key: K,
    fn?: (value: DeepPick<Theme, K>) => R,
) => FromThemeAccessor<K, R>;

export default function fromTheme<K extends ThemeKey, R = DeepPick<Theme, K>>(
    key: K,
    fn?: (value: DeepPick<Theme, K>) => R,
): FromThemeAccessor<K, R> {
    return createAccessor(function fromTheme(params): R {
        const value = getAttribute(params.theme, key);
        return fn ? fn(value as DeepPick<Theme, K>) : (value as R);
    });
}
