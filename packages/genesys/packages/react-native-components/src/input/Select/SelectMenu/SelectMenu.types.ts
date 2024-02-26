import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type SelectMenuStyle = ViewStyle & {
    content?: ViewStyle & {
        list?: ViewStyle & {
            container?: ViewStyle;
        };
    };
};

export interface SelectMenuProps {
    /**
     * Menu is open
     */
    open: boolean;
    /**
     * Sets menu open
     */
    setOpen: (open: boolean) => void;
    /**
     * Menu style
     */
    style?: SelectMenuStyle;
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
    children: Exclude<ReactNode, "string" | "number">;
}

export interface SelectItemsViewProps {
    itemCount: number;
}
