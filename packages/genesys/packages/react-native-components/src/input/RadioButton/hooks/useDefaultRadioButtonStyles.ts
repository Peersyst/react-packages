import { FormControlStateStyle } from "@peersyst/react-native-components";
import { useTheme } from "@peersyst/react-native-styled";
import { emphasize, lighten } from "@peersyst/react-utils";
import { RadioButtonStyle } from "../RadioButton.types";

export default function (): FormControlStateStyle<Partial<RadioButtonStyle>> {
    const theme = useTheme();
    return {
        color: emphasize(theme.palette.text, 0.5),
        active: {
            color: theme.palette.primary,
        },
        disabled: {
            active: {
                color: lighten(theme.palette.disabled, 0.1),
            },
        },
    };
}
