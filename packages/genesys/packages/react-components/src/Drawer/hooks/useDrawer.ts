import { useModal, ModalContextType } from "../../ModalProvider";

export interface UseDrawerResult {
    showDrawer: ModalContextType["showModal"];
    hideDrawer: ModalContextType["hideModal"];
    isDrawerActive: ModalContextType["isModalActive"];
}

export function useDrawer(): UseDrawerResult {
    const { showModal, hideModal, isModalActive } = useModal();
    return {
        showDrawer: showModal,
        hideDrawer: hideModal,
        isDrawerActive: isModalActive,
    };
}
