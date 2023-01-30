import { CoreLabelProps, ThemeColor } from "@peersyst/react-components-core";
import { TextProps, TextStyle, ViewStyle } from "react-native";

export type LabelStyle = ViewStyle & {
    label?: TextStyle;
};

export interface LabelProps extends CoreLabelProps {
    /**
     * Label color
     */
    color?: ThemeColor;
    /**
     * Label style
     */
    style?: LabelStyle;
    /**
     * Label number of lines
     */
    numberOfLines?: TextProps["numberOfLines"];
}
