import { ModalManager } from "./ModalManager/ModalManager";
import { ModalProvider as CoreModalProvider } from "@peersyst/react-components-core";
import { ReactNode } from "react";

interface ModalProviderProps {
    children?: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps): JSX.Element {
    return (
        <CoreModalProvider modalRenderer={(modals) => <ModalManager>{modals}</ModalManager>}>
            {children}
        </CoreModalProvider>
    );
}
