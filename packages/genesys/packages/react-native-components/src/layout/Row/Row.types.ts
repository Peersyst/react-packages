import { ReactNode } from "react";
import { FlexStyle, PressableProps, ViewStyle } from "react-native";

export interface RowProps extends Omit<PressableProps, "children" | "stlye"> {
    flex?: number;
    gap?: number | string;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    wrap?: boolean;
    style?: ViewStyle;
    children?: ReactNode;
}
