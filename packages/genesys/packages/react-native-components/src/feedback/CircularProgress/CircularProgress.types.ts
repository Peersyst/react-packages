import { ThemeColor } from "@peersyst/react-components-core";
import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { AnimatableValue, AnimationCallback, WithTimingConfig } from "react-native-reanimated";
import { Linecap } from "react-native-svg";

export interface CircularProgressStyle extends Omit<ViewStyle, "width" | "height"> {
    /**
     * The size of the component.
     */
    size?: number;
    /**
     * The thickness of the circle.
     */
    thickness?: number;
    /**
     * The color of the component.
     */
    color?: string;
}

export interface CircularProgressProps<AnimationConfig = WithTimingConfig> {
    /**
     * The value of the progress indicator from 0 to 100.
     */
    value?: number;
    /**
     * Linecap style of the progress indicator.
     */
    strokeLinecap?: Linecap;
    /**
     * Animation fn.
     */
    animation?: <T extends AnimatableValue>(
        toValue: T,
        userConfig?: AnimationConfig,
        callback?: AnimationCallback,
    ) => T;
    /**
     * Animation config.
     */
    animationConfig?: AnimationConfig;
    /**
     * Component color.
     */
    color?: ThemeColor;
    /**
     * The size of the component.
     */
    style?: CircularProgressStyle;
    /**
     * Component content.
     */
    children?: ReactNode;
}
