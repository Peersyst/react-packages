import { currentColor, stylesheet } from "@peersyst/react-native-styled";
import { getLuminance, emphasize, alpha, darken } from "@peersyst/react-utils";
import Button from "./Button";

export const buttonStylesheet = stylesheet(Button)(({ fromTheme }) => ({
    backgroundColor: "transparent",
    color: currentColor(),

    sm: {
        paddingHorizontal: 10,
        height: 32,
        fontSize: 11,
    },
    md: {
        paddingHorizontal: 12,
        height: 40,
        fontSize: 12,
    },
    lg: {
        paddingHorizontal: 14,
        height: 48,
        fontSize: 13,
    },

    filled: {
        backgroundColor: currentColor(),
        color: currentColor((color) => (getLuminance(color) > 0.5 ? "#000" : "#FFF")),
    },
    outlined: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: currentColor(),
    },
    text: {
        borderColor: "transparent",
    },

    pressed: {
        backgroundColor: currentColor((color) => alpha(color, 0.2)),

        filled: {
            backgroundColor: currentColor((color) => darken(color, 0.1)),
        },
        text: {
            backgroundColor: "transparent",
            textDecorationLine: "underline",
        },
    },

    disabled: {
        color: fromTheme("palette.disabled"),
        filled: {
            backgroundColor: fromTheme("palette.disabled"),
            color: fromTheme("palette.disabled", (value) => emphasize(value, 0.5)),
        },
        outlined: {
            borderColor: fromTheme("palette.disabled"),
        },
    },
}));
