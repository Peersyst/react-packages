import { nextTick } from "process";
import { FormEvent, useCallback, useState } from "react";
import { FieldState } from "../Form.types";

interface UseFormSubmitResult {
    submitted: boolean;
    handleSubmit: (e?: FormEvent) => void;
}

export function useFormSubmit(
    data: Record<string, FieldState>,
    onSubmit: (data: any) => any,
    onInvalid?: () => any,
): UseFormSubmitResult {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = useCallback(
        (e?: FormEvent): void => {
            e?.preventDefault();
            if (!submitted) {
                setSubmitted(true);
            }
            nextTick(() => {
                const valid = Object.values(data).every((v) => v.valid);
                if (valid) {
                    const values: Record<string, any> = {};
                    Object.entries(data).forEach((v) => (values[v[0]] = v[1].value));
                    onSubmit(values);
                } else onInvalid?.();
            });
        },
        [data, submitted, onSubmit, onInvalid],
    );

    return { submitted, handleSubmit };
}
