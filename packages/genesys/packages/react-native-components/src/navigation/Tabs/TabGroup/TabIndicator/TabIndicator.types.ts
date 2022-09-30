import { LayoutRectangle, ViewStyle } from "react-native";
import { ReactElement } from "react";

export interface TabIndicatorProps {
    /**
     * Custom Indicator element
     */
    indicator?: ReactElement;
    /**
     * TabIndicator style
     */
    style?: ViewStyle;
    /**
     * Tab group layout
     */
    tabGroupLayout: LayoutRectangle | undefined;
}
