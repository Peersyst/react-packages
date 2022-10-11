import { FormControlStateStyle } from "@peersyst/react-native-components";
import { useTheme } from "@peersyst/react-native-styled";
import { emphasize, lighten } from "@peersyst/react-utils";
import { SwitchStyle } from "../Switch.types";

export default function (): FormControlStateStyle<Partial<SwitchStyle>> {
    const theme = useTheme();
    return {
        backgroundColor: emphasize(theme.palette.text, 0.5),
        thumb: {
            backgroundColor: "#FFF",
        },
        active: {
            backgroundColor: theme.palette.primary,
        },
        disabled: {
            backgroundColor: lighten(theme.palette.disabled, 0.01),
            thumb: {
                backgroundColor: lighten(theme.palette.disabled, 0.4),
            },
            active: {
                backgroundColor: lighten(theme.palette.disabled, 0.1),
            },
        },
    };
}
