import { DialogProps, DialogStyle } from "../Dialog.types";
import { useComputeStyles } from "../../../hooks";

export default function useDialogStyles(props: DialogProps): DialogStyle {
    return useComputeStyles("Dialog", props);
}
