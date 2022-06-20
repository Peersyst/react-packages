import { useContext, useEffect } from "react";
import { FormContext } from "../FormContext";

export default function useFormNotification(
    name: string | undefined,
    value: unknown,
    valid = true,
): void {
    const { notifyForm } = useContext(FormContext);

    // Notify when there is a change
    useEffect(() => {
        name && notifyForm?.({ name, value, valid });
    }, [value, valid, notifyForm, name]);

    // Notify when unmount or name changes
    useEffect(() => {
        return () => {
            name && notifyForm?.({ name, value, valid, removed: true });
        };
    }, [name]);
}
