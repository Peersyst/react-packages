import { ToastStyle } from "../Toast.types";
import { ToastType } from "@peersyst/react-components-core";
import { TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@peersyst/react-native-styled";
import { getLuminance } from "@peersyst/react-utils";
import { extractTextStyles } from "@peersyst/react-native-utils";

export default function useToastStyles(
    style: ToastStyle,
    type?: ToastType,
): { container: ViewStyle; text: TextStyle } {
    const { palette } = useTheme();
    const statusColor = type && type !== "loading" ? palette.status[type] : palette.background;
    const backgroundColor = style.backgroundColor || statusColor;
    const textColor = getLuminance(backgroundColor as string) > 0.5 ? "#000000" : "#FFFFFF";
    const [textStyle, containerStyle] = extractTextStyles(style);
    return {
        text: { ...textStyle, color: textColor },
        container: { ...containerStyle, backgroundColor: backgroundColor },
    };
}
