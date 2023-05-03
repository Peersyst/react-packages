import { TextStyle, ViewStyle } from "react-native";
import { AlertProps } from "../Alert.types";
import { useComputeStyles, useSplitTextAndViewStyles } from "../../../hooks";

export default function useAlertStyles(props: AlertProps): {
    container: ViewStyle;
    text: TextStyle;
} {
    const computedStyles = useComputeStyles("Alert", props);

    const [text, container] = useSplitTextAndViewStyles(computedStyles);

    return { text, container };
}
