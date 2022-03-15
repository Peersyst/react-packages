import { useState } from "react";

export default function useControlled<T>(
    defaultValue: T,
    value?: T,
    onChange?: (value: T) => unknown,
): [T, (value: T) => unknown] {
    const [state, setState] = useState<T>(defaultValue);
    return [value || state, onChange || setState];
}
