import { useTheme } from "@peersyst/react-native-styled";
import { ButtonSizeStyle, ButtonStyleWithVariant } from "../Button.types";
import { alpha, darken, emphasize, getLuminance } from "@peersyst/react-utils";

export interface UseDefaultStylesResult {
    defaultStyles: ButtonStyleWithVariant;
    defaultDisabledStyles: ButtonStyleWithVariant;
    defaultPressedStyles: ButtonStyleWithVariant;
    defaultSizeStyles: ButtonSizeStyle;
}

export default function (colorParam: string | undefined): UseDefaultStylesResult {
    const theme = useTheme();

    const color = colorParam || theme.palette.primary;

    const defaultStyles: ButtonStyleWithVariant = {
        backgroundColor: "transparent",
        color,
        variant: {
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
        },
    };

    const defaultDisabledStyles: ButtonStyleWithVariant = {
        color: theme.palette.disabled,
        variant: {
            filled: {
                backgroundColor: theme.palette.disabled,
                color: emphasize(theme.palette.disabled, 0.5),
            },
            outlined: {
                borderColor: theme.palette.disabled,
            },
        },
    };

    const defaultPressedStyles: ButtonStyleWithVariant = {
        backgroundColor: alpha(color, 0.2),
        variant: {
            filled: {
                backgroundColor: darken(color, 0.1),
            },
            text: {
                backgroundColor: "transparent",
                textDecorationLine: "underline",
            },
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
