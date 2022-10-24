import { CoreLabelProps } from "@peersyst/react-components-core";
import { TextProps, TextStyle, ViewStyle } from "react-native";

export type LabelStyle = ViewStyle & {
    label?: TextStyle;
};

export interface LabelProps extends CoreLabelProps {
    /**
     * Label style
     */
    style?: LabelStyle;
    /**
     * Label number of lines
     */
    numberOfLines?: TextProps["numberOfLines"];
}
