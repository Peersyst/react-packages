import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";
import { DialogProps, DialogStyle } from "../Dialog.types";

export default function useDialogStyles(props: DialogProps): DialogStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("Dialog");
    const stylesheet = useStylesheet<DialogProps>("Dialog");

    const mergedStylesheet = useMergeStylesheets(stylesheet, defaultStyle, style);
    const resolvedStyles = useResolveStylesheet(props, mergedStylesheet);

    return resolvedStyles;
}
