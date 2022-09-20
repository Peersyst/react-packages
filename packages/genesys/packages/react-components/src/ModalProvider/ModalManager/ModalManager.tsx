import { ModalManagerRoot } from "./ModalManager.styles";
import { useModalState } from "@peersyst/react-components-core";

export function ModalManager(): JSX.Element {
    const modals = useModalState();

    return <ModalManagerRoot id="modal-root">{modals}</ModalManagerRoot>;
}
