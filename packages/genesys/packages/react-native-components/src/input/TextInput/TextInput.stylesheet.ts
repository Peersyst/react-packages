import { stylesheet } from "@peersyst/react-native-styled";
import TextInput from "./TextInput";

export const textInputStylesheet = stylesheet(TextInput)(({ fromTheme }) => ({
    component: {
        borderColor: fromTheme("palette.text"),
        input: {
            color: fromTheme("palette.text"),
            fontSize: 14,
            highlightColor: fromTheme("palette.primary"),
        },

        invalid: {
            borderColor: fromTheme("palette.status.error"),
            input: {
                highlightColor: fromTheme("palette.status.error"),
            },
        },

        valid: {
            borderColor: fromTheme("palette.status.success"),
            input: {
                highlightColor: fromTheme("palette.status.success"),
            },
        },

        focused: {
            borderColor: fromTheme("palette.primary"),
        },

        disabled: {
            borderColor: fromTheme("palette.disabled"),
            input: {
                color: fromTheme("palette.disabled"),
            },
        },
    },
}));
