import { stylesheet } from "@peersyst/react-native-styled";
import { emphasize, lighten } from "@peersyst/react-utils";
import RadioButton from "./RadioButton";

export const radioButtonStylesheet = stylesheet(RadioButton)(({ fromTheme }) => ({
    component: {
        color: fromTheme("palette.text", (text) => emphasize(text, 0.5)),
        active: {
            color: fromTheme("palette.primary"),
        },
        disabled: {
            active: {
                color: fromTheme("palette.disabled", (disabled) => lighten(disabled, 0.1)),
            },
        },
    },
}));
