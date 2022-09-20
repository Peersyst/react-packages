import {
    ModalContext,
    useModal as useModalCore,
    UseModalResult,
} from "@peersyst/react-components-core";
import { useContext } from "react";

export default function (): UseModalResult {
    const { overrideModal } = useContext(ModalContext);
    const { hideModal, isModalActive } = useModalCore();

    return {
        showModal: overrideModal,
        hideModal,
        isModalActive,
    };
}
