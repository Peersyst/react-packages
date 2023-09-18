import { CoreToastProps } from "./Toast.types";
import { useEffect } from "react";
import { useControlled } from "@peersyst/react-hooks";
import { CoreAlertProps } from "../Alert";
import { useMergeDefaultProps } from "../config";

export interface ToastComps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export interface UseCoreToastResult<
    ToastPosition,
    AlertProps extends CoreAlertProps,
    ToastProps extends CoreToastProps<ToastPosition, AlertProps>,
> {
    props: ToastProps;
    comps: ToastComps;
}

export default function useCoreToast<
    ToastPosition,
    AlertProps extends CoreAlertProps,
    ToastProps extends CoreToastProps<ToastPosition, AlertProps>,
>(rawProps: ToastProps): UseCoreToastResult<ToastPosition, AlertProps, ToastProps> {
    const props = useMergeDefaultProps("Toast", rawProps);

    const { open: propOpen, onClose, duration, type } = props;

    const [open, setOpen] = useControlled(true, propOpen, propOpen ? onClose : undefined);

    useEffect(() => {
        if (open && duration !== Infinity && (!type || type !== "loading")) {
            const hideTimeout = setTimeout(() => setOpen(false), duration);
            return () => {
                clearTimeout(hideTimeout);
            };
        }
    }, [open]);

    return {
        props,
        comps: {
            open,
            setOpen,
        },
    };
}
