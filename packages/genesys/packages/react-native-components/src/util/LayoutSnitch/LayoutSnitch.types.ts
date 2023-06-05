import { ReactElement } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export type LayoutSnitchChildStyle = Pick<
    ViewStyle,
    | "height"
    | "minHeight"
    | "maxHeight"
    | "width"
    | "minWidth"
    | "maxWidth"
    | "position"
    | "opacity"
>;
export interface LayoutSnitchProps {
    reveal?: boolean;
    onLayout?: ViewProps["onLayout"];
    children: ReactElement<{
        onLayout?: ViewProps["onLayout"];
        style?: StyleProp<LayoutSnitchChildStyle>;
    }>;
}
