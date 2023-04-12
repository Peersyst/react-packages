import { TextStyle, ViewStyle } from "react-native";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { AlertProps } from "../Alert.types";
import { useGlobalStyles } from "../../../config";
import { useTextAndViewStyles } from "../../../hooks";

export default function useAlertStyles(props: AlertProps): {
    container: ViewStyle;
    text: TextStyle;
} {
    const { style } = props;

    const defaultStyle = useGlobalStyles("Alert");
    const stylesheet = useStylesheet<AlertProps>("Alert");

    const mergedStylesheet = useMergeStylesheets<AlertProps>(stylesheet, defaultStyle, style);
    const resolvedStyles = useResolveStylesheet(props, mergedStylesheet);

    const [text, container] = useTextAndViewStyles(resolvedStyles);

    return { text, container };
}
