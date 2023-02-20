import { useTheme } from "@peersyst/react-native-styled";
import { ButtonStyle } from "../Button.types";
import { alpha, darken, emphasize, getLuminance } from "@peersyst/react-utils";

export default function (colorParam: string | undefined): ButtonStyle {
    const theme = useTheme();

    const color = colorParam || theme.palette.primary;

    return {
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

        pressed: {
            backgroundColor: alpha(color, 0.2),

            filled: {
                backgroundColor: darken(color, 0.1),
            },
            text: {
                backgroundColor: "transparent",
                textDecorationLine: "underline",
            },
        },

        disabled: {
            color: theme.palette.disabled,

            filled: {
                backgroundColor: theme.palette.disabled,
                color: emphasize(theme.palette.disabled, 0.5),
            },
            outlined: {
                borderColor: theme.palette.disabled,
            },
        },
    };
}
