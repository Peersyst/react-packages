import { ReactNode } from "react";
import { ToastProvider as CoreToastProvider } from "@peersyst/react-components-core";
import { Toast } from "../Toast";

interface ToastProviderProps {
    children?: ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    return (
        <CoreToastProvider
            Toast={Toast}
            toasterRenderer={(toast) => <div id="toast-root">{toast}</div>}
        >
            {children}
        </CoreToastProvider>
    );
}
