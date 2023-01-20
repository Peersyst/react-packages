import { AlertType } from "@peersyst/react-components-core";
import { TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@peersyst/react-native-styled";
import { getLuminance } from "@peersyst/react-utils";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { AlertStyle } from "../Alert.types";

export default function useAlertStyles(
    style: AlertStyle,
    type?: AlertType,
): { container: ViewStyle; text: TextStyle } {
    const { palette } = useTheme();
    const statusColor = type && type !== "loading" ? palette.status[type] : palette.background;
    const backgroundColor = style.backgroundColor || statusColor;
    const textColor =
        style.color || (getLuminance(backgroundColor as string) > 0.5 ? "#000000" : "#FFFFFF");
    const [textStyle, containerStyle] = extractTextStyles(style);
    return {
        text: { ...textStyle, color: textColor },
        container: { ...containerStyle, backgroundColor: backgroundColor },
    };
}
