import { IconButtonProps } from "../IconButton.types";
import { TextStyle, ViewStyle } from "react-native";
import { useComputeStyles, useSplitTextAndViewStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";

export interface UseIconButtonStylesResult {
    textStyle: TextStyle;
    rootStyle: ViewStyle;
}

export default function useIconButtonStyles(
    props: IconButtonProps,
    pressed: boolean,
    disabled: boolean,
): UseIconButtonStylesResult {
    const compute = makeStyleComputation(
        function (stylesheet) {
            const { pressed: pressedStyles, disabled: disabledStyles, ...rootStyles } = stylesheet;

            return {
                ...rootStyles,
                ...(pressed && { ...pressedStyles }),
                ...(disabled && { ...disabledStyles }),
            };
        },
        [pressed, disabled],
    );

    const computedStyles = useComputeStyles("IconButton", props, undefined, { compute });

    const [textStyle, rootStyle] = useSplitTextAndViewStyles(computedStyles);

    return { textStyle, rootStyle };
}
