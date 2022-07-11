import { useEffect, useState } from "react";
import { useControlled } from "@peersyst/react-hooks";

export interface UseFormControlledResult<T> {
    state: [T, (v: T) => any];
    modified: boolean;
}

export default function <T>(
    defaultValue: T,
    value?: T,
    onChange?: (value: T) => unknown,
): UseFormControlledResult<T> {
    const [state, setState] = useControlled(defaultValue, value, onChange);
    const [modified, setModified] = useState(false);

    useEffect(() => {
        if (state && !modified) setModified(true);
    }, [modified, state]);

    return {
        state: [state, setState],
        modified,
    };
}
