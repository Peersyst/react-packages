import { TextStyle, ButtonProps as NativeButtonProps } from "react-native";
import { ReactElement } from "react";
import { SX } from "@peersyst/react-native-styled";
import { ButtonSize, ButtonVariant, CoreButtonProps } from "@peersyst/react-components-core";
import { GradientViewStyle } from "../../layout/GradientView";

export type ButtonRootStyle = GradientViewStyle;

export type ButtonTextStyle = TextStyle;

export type BaseButtonStyle = ButtonRootStyle & ButtonTextStyle;

export type ButtonVariantStyle = Partial<Record<ButtonVariant, BaseButtonStyle>>;

export type ButtonSizeStyle = Partial<Record<ButtonSize, BaseButtonStyle>>;

export type ButtonStatelessStyle = BaseButtonStyle & ButtonVariantStyle & ButtonSizeStyle;

export type ButtonStatefulStyle = {
    disabled?: ButtonStatelessStyle;
    pressed?: ButtonStatelessStyle;
};

export type ButtonStyle = ButtonStatelessStyle & ButtonStatefulStyle;

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
        style?: ButtonStyle;
        /**
         * Button sx
         */
        sx?: SX<ButtonStyle>;
        /**
         * Display icon to the right of the text
         */
        rightIcon?: ReactElement;
        /**
         * Display icon to the left of the text
         */
        leftIcon?: ReactElement;
    };
