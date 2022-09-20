import { ReactNode } from "react";
import { ToastProvider as CoreToastProvider } from "@peersyst/react-components-core";
import Toaster from "./Toaster";

interface ToastProviderProps {
    children?: ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    return (
        <CoreToastProvider>
            <Toaster />
            {children}
        </CoreToastProvider>
    );
}
