import { useState } from "react";

export default function useControlled<T>(
    defaultValue: T,
    value?: T,
    onChange?: (value: T) => unknown,
): [T, (value: T) => unknown] {
    const state = useState<T>(defaultValue);
    if (value !== undefined) return [value, onChange || (() => undefined)];
    else return state;
}
