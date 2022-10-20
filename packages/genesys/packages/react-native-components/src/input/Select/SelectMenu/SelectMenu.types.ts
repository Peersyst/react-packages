import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface SelectMenuProps {
    /**
     * Menu is open
     */
    open: boolean;
    /**
     * Menu style
     */
    style?: ViewStyle;
    /**
     * Header element
     */
    header?: ReactNode;
    /**
     * Footer element
     */
    footer?: ReactNode;
    /**
     * Menu options and mask
     */
    children: ReactNode;
}

export interface SelectItemsViewProps {
    itemCount: number;
}
