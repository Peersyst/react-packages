import { DialogProps } from "../Dialog.types";
import { useComputeStyles, useSplitTextAndViewStyles } from "../../../hooks";
import { TextStyle, ViewStyle } from "react-native";

export type UseDialogStylesResult = {
    rootStyle: ViewStyle;
    titleStyle: {
        textStyle: TextStyle;
        rootStyle: ViewStyle;
    };
    contentStyle: {
        textStyle: TextStyle;
        rootStyle: ViewStyle;
    };
    buttonsStyle: ViewStyle;
};

export default function useDialogStyles(props: DialogProps): UseDialogStylesResult {
    const computedStyles = useComputeStyles("Dialog", props);

    const {
        title: titleStyle = {},
        content: contentStyle = {},
        buttons: buttonsStyle = {},
        ...rootStyle
    } = computedStyles;

    const [titleTextStyle, titleRootStyle] = useSplitTextAndViewStyles(titleStyle);
    const [contentTextStyle, contentRootStyle] = useSplitTextAndViewStyles(contentStyle);

    return {
        rootStyle,
        titleStyle: {
            textStyle: titleTextStyle,
            rootStyle: titleRootStyle,
        },
        contentStyle: {
            textStyle: contentTextStyle,
            rootStyle: contentRootStyle,
        },
        buttonsStyle,
    };
}
