import { FlexStyle, PressableProps, ViewStyle } from "react-native";
import { ReactNode } from "react";

export interface ColProps extends Omit<PressableProps, "children" | "stlye"> {
    gap?: number | string;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    flex?: number;
    style?: ViewStyle;
    children?: ReactNode;
}
