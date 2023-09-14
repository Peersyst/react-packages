import { TextStyle, ViewStyle } from "react-native";
import { AlertProps } from "../Alert.types";
import { useComputeStyles, useSplitTextAndViewStyles } from "../../../hooks";

export default function useAlertStyles(props: AlertProps): {
    container: ViewStyle;
    text: TextStyle;
    icon: TextStyle;
} {
    const computedStyles = useComputeStyles("Alert", props);

    const [text, container, icon] = useSplitTextAndViewStyles(computedStyles);

    return { text, container, icon };
}
