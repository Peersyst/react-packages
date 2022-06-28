import { FormControlLabelStyle } from "../FormControlLabel.types";
import { useTheme } from "@peersyst/react-native-styled";
import { LabelStyle } from "../../../display/Label";

export default function (): FormControlLabelStyle {
    const { palette } = useTheme();

    const focusedStyle: LabelStyle = {
        label: {
            color: palette.primary,
        },
    };
    const invalidStyle: LabelStyle = {
        label: {
            color: palette.status.error,
        },
    };
    const validStyle: LabelStyle = {
        label: {
            color: palette.status.success,
        },
    };
    const disabledStyle: LabelStyle = {
        label: {
            color: palette.disabled,
        },
    };

    return {
        focused: focusedStyle,
        invalid: invalidStyle,
        valid: validStyle,
        disabled: disabledStyle,
    };
}
