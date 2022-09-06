import { ViewStyle, TextStyle, ButtonProps as NativeButtonProps } from "react-native";
import { ReactElement } from "react";
import { SX } from "@peersyst/react-native-styled";
import { CoreButtonProps } from "@peersyst/react-components-core";

export type ButtonStyle = ViewStyle & TextStyle;
export interface ButtonVariantStyle {
    filled?: ButtonStyle;
    text?: ButtonStyle;
    outlined?: ButtonStyle;
}
export type ButtonStyleWithVariant = ButtonStyle & ButtonVariantStyle;

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
export type ButtonProps = Omit<NativeButtonProps, "title" | "color" | "onPress"> &
    CoreButtonProps & {
        /**
         * onPress handler
         */
        onPress?: NativeButtonProps["onPress"];
        /**
         * Button's style
         */
        style?: ButtonStyles;
        /**
         * Button sx
         */
        sx?: SX<ButtonStyles>;
        /**
         * Display icon to the right of the text
         */
        rightIcon?: ReactElement;
        /**
         * Display icon to the left of the text
         */
        leftIcon?: ReactElement;
    };
