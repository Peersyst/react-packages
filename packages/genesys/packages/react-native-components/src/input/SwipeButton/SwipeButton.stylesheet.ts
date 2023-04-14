import { currentColor, stylesheet } from "@peersyst/react-native-styled";
import { getLuminance, emphasize } from "@peersyst/react-utils";
import SwipeButton from "./SwipeButton";

export const swipeButtonStylesheet = stylesheet(SwipeButton)(({ fromTheme }) => {
    const color = currentColor();
    const contentColor = currentColor((color) => (getLuminance(color) < 0.5 ? "white" : "black"));
    const disabledContentColor = fromTheme("palette.disabled", (value) => emphasize(value, 0.45));

    return {
        borderRadius: fromTheme("borderRadius"),
        backgroundColor: currentColor(),
        color: contentColor,
        fontSize: 13,
        thumb: {
            backgroundColor: contentColor,
            color,
        },
        disabled: {
            backgroundColor: fromTheme("palette.disabled"),
            color: disabledContentColor,
            thumb: {
                backgroundColor: disabledContentColor,
                color: fromTheme("palette.disabled"),
            },
        },
    };
});
