import { stylesheet } from "@peersyst/react-native-styled";
import { emphasize, lighten } from "@peersyst/react-utils";
import Switch from "./Switch";

export const switchStylesheet = stylesheet(Switch)(({ fromTheme }) => ({
    component: {
        backgroundColor: fromTheme("palette.text", (value) => emphasize(value, 0.5)),
        thumb: {
            backgroundColor: "#FFF",
        },
        active: {
            backgroundColor: fromTheme("palette.primary"),
        },
        disabled: {
            backgroundColor: fromTheme("palette.disabled", (value) => lighten(value, 0.01)),
            thumb: {
                backgroundColor: fromTheme("palette.disabled", (value) => lighten(value, 0.4)),
            },
            active: {
                backgroundColor: fromTheme("palette.disabled", (value) => lighten(value, 0.1)),
            },
        },
    },
}));
