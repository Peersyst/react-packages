import { ComponentType, ReactElement, useContext } from "react";
import { ToastContext } from "../ToastContext";
import { CoreToastProps } from "../../Toast";

export function useToasterState<P extends CoreToastProps<any> = CoreToastProps<any>>(
    Toast: ComponentType<P>,
): ReactElement<P> | undefined {
    const { toasts, removeToast } = useContext(ToastContext);

    const toast = toasts[0];

    if (toast) {
        const handleOnExited = () => {
            onExited?.();
            removeToast();
        };
        const { content, props = {} } = toast;
        const { onExited, ...rest } = props || {};
        const toastProps = { content, onExited: handleOnExited, ...rest } as P;

        return <Toast {...toastProps} />;
    } else {
        return undefined;
    }
}
