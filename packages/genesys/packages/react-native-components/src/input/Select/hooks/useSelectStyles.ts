import { SelectStyle } from "../Select.types";
import useSelectDisplayDefaultStyles from "./useSelectDisplayDefaultStyles";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { ColorValue, TextStyle, ViewStyle } from "react-native";
import { SelectItemStyles } from "../SelectItem";

export interface UseSelectStyles {
    style: ViewStyle;
    display: [TextStyle, ViewStyle & { placeholderColor?: ColorValue; icon?: TextStyle }];
    menu: ViewStyle;
    item: SelectItemStyles;
}

const useSelectDisplayStyles = (
    {
        display: {
            disabled: {
                placeholderColor: disabledPlaceholderColor = undefined,
                icon: disabledIcon = undefined,
                ...displayDisabledStyle
            } = {},
            readonly: {
                placeholderColor: readonlyPlaceholderColor = undefined,
                icon: readonlyIcon = undefined,
                ...displayReadonlyStyle
            } = {},
            ...displayStyle
        } = {},
        menu: menuStyle,
        item = {},
        ...style
    }: SelectStyle,
    disabled: boolean,
    readonly: boolean,
): UseSelectStyles => {
    const {
        defaultStyle: [defaultDisplayTextStyle, defaultDisplayRootStyle],
        defaultDisabledStyle: [defaultDisabledDisplayTextStyle, defaultDisabledDisplayRootStyle],
    } = useSelectDisplayDefaultStyles();

    const [displayDisabledTextStyle, displayDisableRootStyle] =
        extractTextStyles(displayDisabledStyle);
    const [displayReadonlyTextStyle, displayReadonlyRootStyle] =
        extractTextStyles(displayReadonlyStyle);
    const [displayTextStyle, displayRootStyle] = extractTextStyles(displayStyle);

    const displayTextStyles = {
        ...defaultDisplayTextStyle,
        ...displayTextStyle,
        ...(readonly && displayReadonlyTextStyle),
        ...(disabled && { ...defaultDisabledDisplayTextStyle, ...displayDisabledTextStyle }),
    };
    const displayRootStyles = {
        ...defaultDisplayRootStyle,
        ...displayRootStyle,
        ...(readonly && displayReadonlyRootStyle),
        ...(disabled && { ...defaultDisabledDisplayRootStyle, ...displayDisableRootStyle }),
    };
    const placeholderColor =
        (readonly ? readonlyPlaceholderColor : disabled ? disabledPlaceholderColor : undefined) ||
        displayTextStyles.color;
    const iconStyles = readonly ? readonlyIcon : disabled ? disabledIcon : undefined;

    return {
        style,
        display: [displayTextStyles, { placeholderColor, icon: iconStyles, ...displayRootStyles }],
        menu: menuStyle || {},
        item,
    };
};

export default useSelectDisplayStyles;
