import { DeepPick, NestedKeys } from "@peersyst/react-types";

export default function <T extends object, K extends NestedKeys<T>>(
    obj: T,
    key: K,
): DeepPick<T, K> | undefined {
    const [firstKey, ...restKeys] = key.split(".");

    let value: any = obj[firstKey as keyof T];

    for (const key in restKeys) {
        if (typeof value !== "object" || value === null) return undefined;
        value = value?.[key];
    }

    return value;
}
