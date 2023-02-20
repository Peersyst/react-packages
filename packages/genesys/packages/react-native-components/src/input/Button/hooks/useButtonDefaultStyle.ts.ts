import { useTheme } from "@peersyst/react-native-styled";
import { ButtonSizeStyle, ButtonStatelessStyle } from "../Button.types";
import { alpha, darken, emphasize, getLuminance } from "@peersyst/react-utils";

export interface UseDefaultStylesResult {
    defaultStyles: ButtonStatelessStyle;
    defaultDisabledStyles: ButtonStatelessStyle;
    defaultPressedStyles: ButtonStatelessStyle;
    defaultSizeStyles: ButtonSizeStyle;
}

export default function (colorParam: string | undefined): UseDefaultStylesResult {
    const theme = useTheme();

    const color = colorParam || theme.palette.primary;

    const defaultStyles: ButtonStatelessStyle = {
        backgroundColor: "transparent",
        color,

        filled: {
            backgroundColor: color,
            color: getLuminance(color) > 0.5 ? "#000" : "#FFF",
        },
        outlined: {
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: color,
        },
        text: {
            borderColor: "transparent",
        },
    };

    const defaultDisabledStyles: ButtonStatelessStyle = {
        color: theme.palette.disabled,

        filled: {
            backgroundColor: theme.palette.disabled,
            color: emphasize(theme.palette.disabled, 0.5),
        },
        outlined: {
            borderColor: theme.palette.disabled,
        },
    };

    const defaultPressedStyles: ButtonStatelessStyle = {
        backgroundColor: alpha(color, 0.2),

        filled: {
            backgroundColor: darken(color, 0.1),
        },
        text: {
            backgroundColor: "transparent",
            textDecorationLine: "underline",
        },
    };

    const defaultSizeStyles: ButtonSizeStyle = {
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
    };

    return { defaultStyles, defaultDisabledStyles, defaultPressedStyles, defaultSizeStyles };
}
