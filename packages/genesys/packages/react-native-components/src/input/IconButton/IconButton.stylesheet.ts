import { stylesheet } from "@peersyst/react-native-styled";
import IconButton from "./IconButton";

export const iconButtonStylesheet = stylesheet(IconButton)(({ fromTheme }) => ({
    color: fromTheme("palette.text"),

    disabled: {
        color: fromTheme("palette.disabled"),
    },

    pressed: {
        opacity: 0.5,
    },
}));
