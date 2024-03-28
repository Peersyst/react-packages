import { useState } from "react";

export default function useControlled<T>(
    defaultValue: T,
    value?: T,
    onChange?: (value: T) => unknown,
): [T, (value: T) => unknown] {
    const [state, setState] = useState<T>(defaultValue);

    const handleChange = (v: T) => {
        if (value === undefined) setState(v);
        onChange?.(v);
    };

    return [value ?? state, handleChange];
}
