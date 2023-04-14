import { ViewStyle } from "react-native";
import { PaperProps } from "../Paper.types";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";

export default function usePaperStyles(props: PaperProps): ViewStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("Paper");
    const stylesheet = useStylesheet<PaperProps>("Paper");

    const mergedStylesheet = useMergeStylesheets<PaperProps>(stylesheet, defaultStyle, style);
    return useResolveStylesheet(props, mergedStylesheet);
}
