import { currentColor, stylesheet } from "@peersyst/react-native-styled";
import Chip from "./Chip";
import { alpha, getLuminance } from "@peersyst/react-utils";

export const chipStylesheet = stylesheet(Chip)(({ fromTheme }) => ({
    fontSize: 13,
    borderRadius: fromTheme("borderRadius"),
    color: currentColor((color) => (getLuminance(color) > 0.5 ? "#000" : "#FFF")),
    gap: 4,

    // size
    sm: {
        gap: 4,
        fontSize: 12,
        height: 24,
        paddingHorizontal: 10,
        rounded: {
            borderRadius: 12,
        },
    },
    md: {
        gap: 6,
        height: 32,
        paddingHorizontal: 12,
        rounded: {
            borderRadius: 16,
        },
    },
    lg: {
        gap: 8,
        height: 36,
        paddingHorizontal: 14,
        rounded: {
            borderRadius: 18,
        },
    },

    // variant
    filled: {
        color: fromTheme("palette.text"),
        backgroundColor: currentColor((color) => alpha(color, 0.1)),
        borderWidth: 0,
    },
    outlined: {
        color: currentColor(),
        backgroundColor: "transparent",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: currentColor((color) => alpha(color, 0.3)),
    },

    // disabled
    disabled: {
        currentColor: fromTheme("palette.disabled", (color) => alpha(color, 0.2)),
        color: fromTheme("palette.disabled"),

        outlined: {
            currentColor: fromTheme("palette.disabled", (color) => alpha(color, 0.4)),
        },
    },

    // pressed
    pressed: {
        filled: {
            backgroundColor: currentColor((color) => alpha(color, 0.2)),
        },
        outlined: {
            backgroundColor: currentColor((color) => alpha(color, 0.1)),
        },
    },
}));
