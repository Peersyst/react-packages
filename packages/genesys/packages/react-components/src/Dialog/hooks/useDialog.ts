import { useDialog } from "@peersyst/react-components-core";
import { DialogProps } from "../Dialog.types";
import Dialog from "../Dialog";

export interface UseDialogResult {
    showDialog: (props: DialogProps) => void;
    hideDialog: () => void;
    isDialogOpen: () => void;
}

export default function () {
    const { showDialog, hideDialog, isDialogOpen } = useDialog();
    return {
        showDialog: (props: DialogProps) => showDialog(Dialog, props),
        hideDialog: () => hideDialog(Dialog.id),
        isDialogOpen: () => isDialogOpen(Dialog.id),
    };
}
