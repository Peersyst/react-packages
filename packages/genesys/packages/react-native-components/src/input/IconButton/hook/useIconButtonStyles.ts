import { IconButtonProps } from "../IconButton.types";
import { TextStyle, ViewStyle } from "react-native";
import {
    useStylesheet,
    useMergeStylesheets,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { useTextAndViewStyles } from "../../../hooks";

export interface UseIconButtonStylesResult {
    textStyle: TextStyle;
    rootStyle: ViewStyle;
}

export default function useIconButtonStyles(
    props: IconButtonProps,
    pressed: boolean,
    disabled: boolean,
): UseIconButtonStylesResult {
    const { style = {} } = props;

    const stylesheet = useStylesheet<IconButtonProps>("IconButton");
    const mergedStylesheets = useMergeStylesheets<IconButtonProps>(stylesheet, style);

    const { pressed: pressedStyles, disabled: disabledStyles, ...rootStyles } = mergedStylesheets;

    const iconButtonStyles = {
        ...rootStyles,
        ...(pressed && { ...pressedStyles }),
        ...(disabled && { ...disabledStyles }),
    };

    const resolvedStyles = useResolveStylesheet(props, iconButtonStyles);

    const [textStyle, rootStyle] = useTextAndViewStyles(resolvedStyles);

    return { textStyle, rootStyle };
}
