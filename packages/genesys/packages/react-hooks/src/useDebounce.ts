import { debounce } from "@peersyst/react-utils";
import { useCallback, useState } from "react";

export interface UseDebounceResult<T> {
    value: T;
    handleChange: (debouncedValue: T) => void;
    debouncedValue: T;
    debouncing: boolean;
}

export interface UseDebounceOptions<T> {
    onChange?: (value: T) => void;
    callback?: (debouncedValue: T) => any;
    delay?: number;
}

export default function <T>(
    defaultValue: T,
    { onChange, callback, delay = 600 }: UseDebounceOptions<T> = {},
): UseDebounceResult<T> {
    const [value, setValue] = useState<T>(defaultValue);
    const [debouncedValue, setDebouncedValue] = useState<T>(defaultValue);
    const [debouncing, setDebouncing] = useState(false);

    const handleChange = (v: T) => {
        setDebouncing(true);
        setValue(v);
        onChange?.(v);
        changeDebouncedValue(v);
    };

    const changeDebouncedValue = useCallback(
        debounce(async (v: T) => {
            setDebouncedValue(v);
            await Promise.resolve(callback?.(v));
            setDebouncing(false);
        }, delay),
        [callback],
    );

    return {
        value,
        handleChange,
        debouncedValue,
        debouncing,
    };
}
