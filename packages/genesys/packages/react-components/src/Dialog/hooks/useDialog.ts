import { useDialog, UseDialogResult as CoreUseDialogResult } from "@peersyst/react-components-core";
import { DialogProps } from "../Dialog.types";
import Dialog from "../Dialog";

export interface UseDialogResult extends Omit<CoreUseDialogResult, "showDialog"> {
    showDialog: (props: DialogProps) => void;
}

export default function () {
    const { showDialog, ...rest } = useDialog();
    return {
        showDialog: (props: DialogProps) => showDialog(Dialog, props),
        ...rest,
    };
}
