import { useTheme } from "@peersyst/react-native-styled";
import { TextInputStyle } from "../TextInput.types";
import { FormControlStateStyle } from "../../FormControl";

export default function useTextInputDefaultStyles(): FormControlStateStyle<TextInputStyle> {
    const theme = useTheme();

    const defaultStyle: TextInputStyle = {
        borderColor: theme.palette.text,
        input: {
            color: theme.palette.text,
            fontSize: 14,
            highlightColor: theme.palette.primary,
        },
    };

    const invalid: TextInputStyle = {
        borderColor: theme.palette.status.error,
        input: {
            highlightColor: theme.palette.status.error,
        },
    };

    const valid: TextInputStyle = {
        borderColor: theme.palette.status.success,
        input: {
            highlightColor: theme.palette.status.success,
        },
    };

    const focused: TextInputStyle = {
        borderColor: theme.palette.primary,
    };

    const disabled: TextInputStyle = {
        borderColor: theme.palette.disabled,
        input: {
            color: theme.palette.disabled,
        },
    };

    return {
        ...defaultStyle,
        invalid,
        valid,
        focused,
        disabled,
    };
}
