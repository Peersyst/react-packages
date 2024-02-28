import { ModalManager } from "./ModalManager";
import { ModalProvider as CoreModalProvider } from "@peersyst/react-components-core";
import { ReactNode } from "react";
import { PortalHost } from "../../util/Portal";

interface ModalProviderProps {
    children?: ReactNode;
}

export const MODAL_PORTAL_HOST = "modal";

export default function ModalProvider({ children }: ModalProviderProps): JSX.Element {
    return (
        <CoreModalProvider>
            <PortalHost name={MODAL_PORTAL_HOST} />
            <ModalManager />
            {children}
        </CoreModalProvider>
    );
}
