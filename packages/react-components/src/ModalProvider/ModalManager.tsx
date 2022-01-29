import { useModalState } from "./hooks/useModalState";

export function ModalManager(): JSX.Element {
    const modals = useModalState();

    return <div id="modal-root">{modals}</div>;
}
