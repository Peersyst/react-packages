import { ModalManagerRoot } from "./ModalManager.styles";
import { ReactNode } from "react";

export interface ModalManagerProps {
    children: ReactNode;
}

export function ModalManager({ children }: ModalManagerProps): JSX.Element {
    return <ModalManagerRoot id="modal-root">{children}</ModalManagerRoot>;
}
