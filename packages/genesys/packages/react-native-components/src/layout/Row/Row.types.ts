import { ReactNode } from "react";
import { FlexStyle, PressableProps, StyleProp, ViewStyle } from "react-native";

export interface RowProps extends Omit<PressableProps, "children" | "stlye"> {
    flex?: number;
    gap?: number | string;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    wrap?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}
