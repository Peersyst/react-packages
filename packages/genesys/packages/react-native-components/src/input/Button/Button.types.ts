import {
    ViewStyle,
    TextStyle,
    ButtonProps as NativeButtonProps,
    AccessibilityProps,
} from "react-native";
import { ReactElement } from "react";
import { ButtonVariant, CoreButtonProps, ThemeColor } from "@peersyst/react-components-core";
import { LinearGradientProps } from "expo-linear-gradient";

export type ButtonStyle = ViewStyle &
    TextStyle & { gradient?: Pick<LinearGradientProps, "colors" | "locations" | "start" | "end"> };
export type ButtonVariantStyle = Partial<Record<ButtonVariant, ButtonStyle>>;
export type ButtonStyleWithVariant = ButtonStyle & { variant?: ButtonVariantStyle };

export interface ButtonSizeStyle {
    sm?: ButtonStyle;
    md?: ButtonStyle;
    lg?: ButtonStyle;
}
export type ButtonStyles = ButtonStyleWithVariant & {
    disabled?: ButtonStyleWithVariant;
    pressed?: ButtonStyleWithVariant;
} & ButtonSizeStyle;

export interface ButtonRootProps {
    fullWidth: boolean;
}

export interface ButtonContainerProps {
    isLoading: boolean;
}

/**
 * Buttons props omit title in order to make button generic
 */
type CoreAndNativeButtonProps = CoreButtonProps & Omit<AccessibilityProps, "accessibilityRole">;
declare module "@peersyst/react-components-core" {
    export interface ButtonProps extends CoreAndNativeButtonProps {
        /**
         * onPress handler
         */
        onPress?: NativeButtonProps["onPress"];
        /**
         * Button style
         */
        style?: ButtonStyles;
        /**
         * Display icon to the right of the text
         */
        rightIcon?: ReactElement;
        /**
         * Display icon to the left of the text
         */
        leftIcon?: ReactElement;
        /**
         * Button Color
         */
        color?: ThemeColor;
        /**
         * Button test id
         */
        testID?: string | undefined;
    }
}
