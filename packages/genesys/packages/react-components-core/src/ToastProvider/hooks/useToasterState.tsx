import { ComponentType, ReactElement, useContext } from "react";
import { ToastContext } from "../ToastContext";
import { CoreToastProps } from "../../Toast";

export function useToasterState<P extends CoreToastProps<any> = CoreToastProps<any>>(
    Toast: ComponentType<P>,
): ReactElement<P> | undefined {
    const { toasts, removeToast } = useContext(ToastContext);

    const toast = toasts[0];

    if (toast) {
        const { message, props } = toast;
        const { onExited, ...rest } = props || {};

        return (
            // @ts-ignore
            <Toast
                message={message}
                {...rest}
                onExited={() => {
                    onExited?.();
                    removeToast();
                }}
            />
        );
    } else {
        return undefined;
    }
}
