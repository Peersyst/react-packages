import { useTheme } from "@peersyst/react-native-components";
import { emphasize, getLuminance } from "@peersyst/react-utils";
import { SwipeButtonStyle } from "../SwipeButton.types";

export interface UseSlideToAcceptDefaultStylesOptions {
    disabled: boolean;
}

export default function useSwipeButtonDefaultStyles(color: string): SwipeButtonStyle {
    const { palette, borderRadius } = useTheme();

    const contentColor = getLuminance(color) < 0.5 ? "white" : "black";
    const disabledContentColor = emphasize(palette.disabled, 0.45);

    return {
        borderRadius: borderRadius,
        backgroundColor: color,
        color: contentColor,
        fontSize: 13,
        thumb: {
            backgroundColor: contentColor,
            color,
        },
        disabled: {
            backgroundColor: palette.disabled,
            color: disabledContentColor,
            thumb: {
                backgroundColor: disabledContentColor,
                color: palette.disabled,
            },
        },
    };
}
