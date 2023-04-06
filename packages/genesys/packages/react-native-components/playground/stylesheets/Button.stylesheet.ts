import { stylesheet, currentColor } from "@peersyst/react-native-styled";
import { Button } from "../../src";

export default stylesheet(Button)(
    ({ fromTheme, fromProps, fromDimensions, fromSafeAreaInsets }) => ({
        filled: {
            width: fromDimensions("width", (width) => width * 0.5),

            currentColor: fromProps("size", (size) =>
                size === "md" ? fromTheme("palette.primary") : fromTheme("palette.status.error"),
            ),
            borderColor: currentColor(),
            borderWidth: 1,
        },
        pressed: {
            currentColor: fromTheme("palette.status.error"),
        },
        lg: {
            height: fromSafeAreaInsets("top", (top) => top * 5),
        },
    }),
);
