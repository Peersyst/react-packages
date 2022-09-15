import { useModalState } from "./hooks/useModalState";
import { ReactNode } from "react";

export interface ModalManagerProps {
    children: (modals: ReactNode[]) => JSX.Element;
}

export function ModalManager({ children }: ModalManagerProps): JSX.Element {
    const modals = useModalState();

    return children(modals);
}
