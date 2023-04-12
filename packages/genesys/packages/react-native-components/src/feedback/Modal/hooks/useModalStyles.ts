import { ViewStyle } from "react-native";
import { ModalProps } from "../Modal.types";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";

export default function useModalSyles(props: ModalProps): ViewStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("Modal");
    const stylesheet = useStylesheet<ModalProps>("Modal");

    const mergedStylesheet = useMergeStylesheets<ModalProps>(stylesheet, defaultStyle, style);
    return useResolveStylesheet(props, mergedStylesheet);
}
