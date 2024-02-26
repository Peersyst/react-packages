import { ColorValue, TextStyle, ViewStyle } from "react-native";
import { SelectItemStyles } from "../SelectItem";
import { useMemo } from "react";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { SelectStyle } from "../Select.types";
import { SelectMenuStyle } from "../SelectMenu";

export interface UseInnerSelectStylesResult {
    style: ViewStyle;
    display: [TextStyle, ViewStyle & { placeholderColor?: ColorValue; icon?: TextStyle }];
    menu: SelectMenuStyle;
    item: SelectItemStyles;
}

const useInnerSelectStyles = (style: SelectStyle): UseInnerSelectStylesResult => {
    return useMemo(() => {
        const { display: displayStyle = {}, menu: menuStyle, item = {}, ...rootStyle } = style;

        const [displayTextStyle, displayRootStyle] = extractTextStyles(displayStyle);

        return {
            style: rootStyle,
            display: [displayTextStyle, displayRootStyle],
            menu: menuStyle || {},
            item,
        };
    }, [style]);
};

export default useInnerSelectStyles;
