import { useCallback, useState } from "react";
import { FieldState } from "../Form.types";

interface UseFormSubmitResult {
    submitted: boolean;
    handleSubmit: (action?: string) => void;
}

export default function useFormSubmit(
    data: Record<string, FieldState>,
    onSubmit: (data: any, action?: string) => any,
    onInvalid?: () => any,
): UseFormSubmitResult {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = useCallback(
        (action?: string): void => {
            if (!submitted) {
                setSubmitted(true);
            }
            const setData = () => {
                const valid = Object.values(data).every((v) => v.valid);
                if (valid) {
                    const values: Record<string, any> = {};
                    Object.entries(data).forEach((v) => (values[v[0]] = v[1].value));
                    onSubmit(values, action);
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
