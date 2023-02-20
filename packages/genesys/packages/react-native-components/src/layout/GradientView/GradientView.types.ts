import { LinearGradientProps } from "expo-linear-gradient";
import { ViewProps, ViewStyle } from "react-native";

export type GradientViewStyle = ViewStyle & {
    backgroundGradient?: Pick<LinearGradientProps, "colors" | "locations" | "start" | "end">;
};

export interface GradientViewProps extends Omit<ViewProps, "style"> {
    style?: GradientViewStyle;
}
