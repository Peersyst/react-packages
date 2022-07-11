import { useModalState } from "../hooks/useModalState";
import { ModalManagerRoot } from "./ModalManager.styles";

export function ModalManager(): JSX.Element {
    const modals = useModalState();

    return <ModalManagerRoot id="modal-root">{modals}</ModalManagerRoot>;
}
