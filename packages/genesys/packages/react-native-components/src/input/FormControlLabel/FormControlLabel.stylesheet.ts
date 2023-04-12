import { stylesheet } from "@peersyst/react-native-styled";
import FormControlLabel from "./FormControlLabel";

export const formControlLabelStylesheet = stylesheet(FormControlLabel)(({ fromTheme }) => ({
    focused: {
        label: {
            color: fromTheme("palette.primary"),
        },
    },
    invalid: {
        label: {
            color: fromTheme("palette.status.error"),
        },
    },
    valid: {
        label: {
            color: fromTheme("palette.status.success"),
        },
    },
    disabled: {
        label: {
            color: fromTheme("palette.disabled"),
        },
    },
}));
