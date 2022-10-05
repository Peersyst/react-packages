import { ReactElement } from "react";
import { Tab } from "../Tab";
import { ViewProps, ViewStyle } from "react-native";

export interface TabGroupProps {
    /**
     * Render indicator
     */
    renderIndicator?: boolean;
    /**
     * Indicator style
     */
    indicatorStyle?: ViewProps;
    /**
     * Custom Indicator element
     */
    indicator?: ReactElement;
    /**
     * TabGroup style
     */
    style?: ViewStyle;
    /**
     * TabGroup tabs
     */
    children: ReactElement<typeof Tab> | ReactElement<typeof Tab>[];
}
