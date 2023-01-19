import { ReactNode } from "react";
import { useToasterReducer } from "./hooks/useToasterReducer";
import { ToastContext } from "./ToastContext";
import { ToasterActionType } from "./ToastProvider.types";

interface ToastProviderProps {
    children?: ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    const [state, dispatch] = useToasterReducer();

    return (
        <ToastContext.Provider
            value={{
                showToast: (content, props) =>
                    dispatch({
                        type: ToasterActionType.SHOW_TOAST,
                        payload: { content, props },
                    }),
                hideToast: () => dispatch({ type: ToasterActionType.HIDE_TOAST }),
                removeToast: () => dispatch({ type: ToasterActionType.REMOVE_TOAST }),
                toasts: state,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}
