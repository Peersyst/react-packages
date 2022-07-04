import { FormEvent, useCallback, useState } from "react";
import { FieldState } from "../Form.types";

interface UseFormSubmitResult {
    submitted: boolean;
    handleSubmit: (e?: FormEvent) => void;
}

export default function useFormSubmit(
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
            const setData = () => {
                const valid = Object.values(data).every((v) => v.valid);
                if (valid) {
                    const values: Record<string, any> = {};
                    Object.entries(data).forEach((v) => (values[v[0]] = v[1].value));
                    onSubmit(values);
                } else onInvalid?.();
            };
            try {
                setImmediate(setData);
            } catch (e) {
                try {
                    process.nextTick(setData);
                } catch (e) {
                    setData();
                }
            }
        },
        [data, submitted, onSubmit, onInvalid],
    );

    return { submitted, handleSubmit };
}
