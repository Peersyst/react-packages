import {
    LabelProps,
    FormControlledComponentProps,
    FormControlStateStyle,
} from "@peersyst/react-native-components";
import { Animated, LayoutChangeEvent, OpaqueColorValue, ViewStyle } from "react-native";
import { CoreSwitchProps } from "@peersyst/react-components-core";
import { BaseBooleanStyle } from "src/utils";

export type SwitchStyle = FormControlStateStyle<SwitchCoreStyle>;
export type SwitchPartialStyle = FormControlStateStyle<Partial<SwitchCoreStyle>>;

export type SwitchCoreStyle = BaseBooleanStyle<SwitchBaseStyle, SwitchBaseActiveStyle>;

export type SwitchBaseStyle = SwitchStyles & {
    thumb?: SwitchStyles;
};

export type SwitchBaseActiveStyle = {
    backgroundColor?: ColorWithoutOpaqueColorValue;
    thumb?: {
        backgroundColor?: ColorWithoutOpaqueColorValue;
    };
};

type ColorWithoutOpaqueColorValue = Exclude<ViewStyle["backgroundColor"], OpaqueColorValue>;

export interface SwitchStyles extends Omit<ViewStyle, "backgroundColor"> {
    backgroundColor?: ColorWithoutOpaqueColorValue;
}

export type BaseSwitchProps = FormControlledComponentProps<
    CoreSwitchProps<LabelProps>,
    SwitchCoreStyle
>;

export interface SwitchProps extends BaseSwitchProps {
    /**
     * Animation options
     */
    animationConfig?: Omit<Parameters<typeof Animated.timing>[1], "toValue">;
}

export interface HandleLayoutParams {
    nativeEvent: LayoutChangeEvent["nativeEvent"];
    type: "thumbWidth" | "wrapperWidth";
}
