import { currentColor, stylesheet } from "@peersyst/react-native-styled";
import { getLuminance } from "@peersyst/react-utils";
import Alert from "./Alert";

export const alertStylesheet = stylesheet(Alert)(({ fromTheme, fromProps }) => {
    const statusColor = fromProps("type", (type) =>
        fromTheme("palette", (palette) =>
            type && type !== "loading" ? palette.status[type] : palette.background,
        ),
    );

    return {
        currentColor: statusColor,
        backgroundColor: currentColor(),
        color: currentColor((color) =>
            getLuminance(color as string) > 0.5 ? "#000000" : "#FFFFFF",
        ),
    };
});
