import {
    ButtonProps as NativeButtonProps,
    TextStyle,
    TouchableWithoutFeedbackProps,
    ViewStyle,
} from "react-native";
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
     * Form action
     */
    action?: string;
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
    /**
     * This defines how far your touch can start away from the button.
     * This is added to pressRetentionOffset when moving off of the button.
     * NOTE The touch area never extends past the parent view bounds and
     * the Z-index of sibling views always takes precedence if a touch hits
     * two overlapping views.
     */
    hitSlop?: TouchableWithoutFeedbackProps["hitSlop"];
}
