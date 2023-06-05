import { useEffect } from "react";
import { ToastProps } from "./Toast.types";
import { useControlled } from "@peersyst/react-hooks";

/**
 * @deprecated Use `useToast` instead.
 */
export default function Toast({
    type,
    duration,
    open: propOpen,
    onClose,
    children,
}: ToastProps): JSX.Element {
    const [open, setOpen] = useControlled(true, propOpen, propOpen ? onClose : undefined);

    useEffect(() => {
        if (open && duration !== Infinity && (!type || type !== "loading")) {
            const hideTimeout = setTimeout(() => setOpen(false), duration);
            return () => {
                clearTimeout(hideTimeout);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return children(open, setOpen);
}
