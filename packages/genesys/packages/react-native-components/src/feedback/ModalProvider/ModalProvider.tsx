import { ModalManager } from "./ModalManager";
import { ModalProvider as CoreModalProvider } from "@peersyst/react-components-core";
import { ReactNode } from "react";
import { ModalsNode } from "./ModalsNode";

interface ModalProviderProps {
    children?: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps): JSX.Element {
    return (
        <CoreModalProvider>
            {{
                ModalManager: (modals) => <ModalManager>{modals}</ModalManager>,
                children,
                Wrapper: ModalsNode,
            }}
        </CoreModalProvider>
    );
}
