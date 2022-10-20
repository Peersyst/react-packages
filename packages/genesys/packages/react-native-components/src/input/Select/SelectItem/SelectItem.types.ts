import { ViewStyle, TextStyle } from "react-native";
import { CoreSelectItemProps, SelectItemChildrenContext } from "@peersyst/react-components-core";

export interface SelectItemProps<T> extends CoreSelectItemProps<T> {
    /**
     * Item style
     */
    style?: SelectItemStyles;
}

export type SelectItemStyles = ViewStyle &
    TextStyle & {
        selected?: ViewStyle & TextStyle;
        readonly?: ViewStyle & TextStyle;
    };

export type InnerSelectItemProps<T> = Pick<SelectItemProps<T>, "value" | "children"> &
    Required<Pick<SelectItemProps<T>, "style">> &
    Pick<SelectItemChildrenContext<T>, "isSelected" | "setSelected" | "readonly">;

export interface SelectItemTextProps {
    isClearItem: boolean;
}
