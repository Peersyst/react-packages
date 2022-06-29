import { ButtonProps as NativeButtonProps, TextStyle, ViewStyle } from "react-native";
import { ReactElement } from "react";
import { ButtonType } from "../Button";

export type IconButtonStyle = ViewStyle & TextStyle;
export type IconButtonStyles = IconButtonStyle & {
    pressed?: IconButtonStyle;
    disabled?: IconButtonStyle;
};

export interface IconButtonProps {
    /**
     * onPress handler
     */
    onPress?: NativeButtonProps["onPress"];
    /**
     * Button type
     */
    type?: ButtonType;
    /**
     * Prop to display a loading spinner.
     */
    loading?: boolean;
    /**
     * Disables button
     */
    disabled?: boolean;
    /**
     * Button's style
     */
    style?: IconButtonStyles;
    /**
     * Button's text content
     */
    children: ReactElement;
}
