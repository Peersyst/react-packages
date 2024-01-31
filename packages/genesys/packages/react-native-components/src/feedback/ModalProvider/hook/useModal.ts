import { useModal as useModalCore, UseModalResult } from "@peersyst/react-components-core";

/**
 * @deprecated
 */
export default function (): UseModalResult {
    const { showModal, hideModal, isModalActive } = useModalCore();

    return {
        showModal,
        hideModal,
        isModalActive,
    };
}
