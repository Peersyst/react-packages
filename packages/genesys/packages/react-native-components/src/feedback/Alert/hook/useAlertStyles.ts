import { TextStyle, ViewStyle } from "react-native";
import { AlertProps } from "../Alert.types";
import { useComputeStyles, useTextAndViewStyles } from "../../../hooks";

export default function useAlertStyles(props: AlertProps): {
    container: ViewStyle;
    text: TextStyle;
} {
    const computedStyles = useComputeStyles("Alert", props);

    const [text, container] = useTextAndViewStyles(computedStyles);

    return { text, container };
}
