import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { AnimatableValue, AnimationCallback, WithTimingConfig } from "react-native-reanimated";

export type StatelessExpandableContentStyle = ViewStyle;

export type ExpandableContentStyle = ViewStyle & {
    $open?: StatelessExpandableContentStyle;
};

export interface ExpandableContentProps<AnimationConfig = WithTimingConfig> {
    animation?: <T extends AnimatableValue>(
        toValue: T,
        userConfig?: AnimationConfig,
        callback?: AnimationCallback,
    ) => T;
    animationConfig?: AnimationConfig;
    style?: ExpandableContentStyle;
    children?: ReactNode;
}
