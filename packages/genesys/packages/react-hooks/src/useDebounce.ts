import { debounce } from "@peersyst/react-utils";
import { useRef, useState } from "react";

export interface UseDebounceResult<T> {
    value: T;
    handleChange: (debouncedValue: T) => void;
    debouncedValue: T;
    debouncing: boolean;
}

export default function <T>(defaultValue: T, callback?: (debouncedValue: T) => void, delay = 600): UseDebounceResult<T> {
    const [value, setValue] = useState<T>(defaultValue);
    const [debouncedValue, setDebouncedValue] = useState<T>(defaultValue);
    const [debouncing, setDebouncing] = useState(false);

    const handleChange = (v: T) => {
        setDebouncing(true);
        setValue(v);
        changeDebouncedValue(v);
    };

    const changeDebouncedValue = useRef(
        debounce((v: T) => {
            setDebouncedValue(v);
            callback?.(v);
            setDebouncing(false);
        }, delay),
    ).current;

    return {
        value,
        handleChange,
        debouncedValue,
        debouncing,
    };
}
