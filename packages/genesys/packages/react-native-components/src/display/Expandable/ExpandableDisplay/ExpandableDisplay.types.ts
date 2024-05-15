import { ReactElement, ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type StatelessExpandableDisplayStyle = ViewStyle &
    TextStyle & {
        $icon?: TextStyle;
    };

export type ExpandableDisplayStyle = StatelessExpandableDisplayStyle & {
    $open?: StatelessExpandableDisplayStyle;
};

export interface ExpandableDisplayProps {
    icon?: ReactElement | boolean;
    reverse?: boolean;
    style?: ExpandableDisplayStyle;
    children?: ReactNode;
}

export interface ExpandableDisplayRootProps {
    reverse: boolean;
}
