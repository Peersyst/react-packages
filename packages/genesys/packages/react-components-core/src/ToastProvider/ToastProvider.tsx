import { ComponentType, ReactElement, ReactNode } from "react";
import { useToasterReducer } from "./hooks/useToasterReducer";
import { ToastContext } from "./ToastContext";
import { ToasterActionType } from "./ToastProvider.types";
import { CoreToastProps } from "../Toast";
import Toaster from "./Toaster";

interface ToastProviderProps<ToastProps> {
    Toast: ComponentType<ToastProps>;
    toasterRenderer: (toast: ReactNode) => ReactElement;
    children?: ReactNode;
}

export default function ToastProvider<P extends CoreToastProps<any> = CoreToastProps<any>>({
    Toast,
    toasterRenderer,
    children,
}: ToastProviderProps<P>): JSX.Element {
    const [state, dispatch] = useToasterReducer();

    return (
        <ToastContext.Provider
            value={{
                showToast: (message, props) =>
                    dispatch({
                        type: ToasterActionType.SHOW_TOAST,
                        payload: { message, props },
                    }),
                hideToast: () => dispatch({ type: ToasterActionType.HIDE_TOAST }),
                removeToast: () => dispatch({ type: ToasterActionType.REMOVE_TOAST }),
                toasts: state,
            }}
        >
            <Toaster Toast={Toast}>{toasterRenderer}</Toaster>
            {children}
        </ToastContext.Provider>
    );
}
