import { DeepPick, NestedKeys } from "@peersyst/react-types";

// @ts-ignore Not excessively deep (max 10 levels)
export default function <T extends object, K extends NestedKeys<T>>(
    obj: T,
    key: K,
    // @ts-ignore Not excessively deep (max 10 levels)
): DeepPick<T, K> {
    const [firstKey, ...restKeys] = key.split(".");

    // @ts-ignore+
    return restKeys.reduce((prev, curr) => prev[curr], obj[firstKey as keyof T]);
}
