import { useModal } from "../../ModalProvider";
import { DialogProps } from "../Dialog.types";
import { ModalWithId } from "../../ModalProvider/ModalProvider.types";

export interface UseDialogResult {
    showDialog: (Dialog: ModalWithId<DialogProps>, props: DialogProps) => void;
    hideDialog: (Dialog: ModalWithId | string) => void;
    isDialogOpen: (Dialog: ModalWithId | string) => boolean;
}

export default function (): UseDialogResult {
    const { showModal, hideModal, isModalActive } = useModal();
    const showDialog = (Dialog: ModalWithId<DialogProps>, props: DialogProps): void =>
        showModal(Dialog, props);
    const hideDialog = (Dialog: ModalWithId | string): void => hideModal(Dialog);
    const isDialogOpen = (Dialog: ModalWithId | string): boolean => isModalActive(Dialog);

    return { showDialog, hideDialog, isDialogOpen };
}
