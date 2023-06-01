import { ReactElement } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface LayoutSnitchProps {
    onLayout?: ViewProps["onLayout"];
    children: ReactElement<{
        onLayout?: ViewProps["onLayout"];
        style?: StyleProp<
            Pick<
                ViewStyle,
                | "height"
                | "minHeight"
                | "maxHeight"
                | "width"
                | "minWidth"
                | "maxWidth"
                | "position"
                | "opacity"
            >
        >;
    }>;
}
