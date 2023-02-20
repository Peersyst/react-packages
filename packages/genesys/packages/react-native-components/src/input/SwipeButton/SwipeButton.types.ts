import { ButtonType, ThemeColor } from "@peersyst/react-components-core";
import { ReactElement, ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { GradientViewStyle } from "../../layout/GradientView";

export type BaseSwipeButtonStyle = GradientViewStyle &
    TextStyle & {
        track?: ViewStyle;
        rail?: ViewStyle;
        thumb?: ViewStyle & TextStyle;
    };

export type SwipeButtonStyle = BaseSwipeButtonStyle & {
    disabled?: BaseSwipeButtonStyle;
};

export interface SwipeButtonProps {
    /**
     * Swipe handler
     */
    onSwipe?: () => void;
    /**
     * Button type
     */
    type?: ButtonType;
    /**
     * Additional form action
     */
    action?: string;
    /**
     * Display a loading spinner.
     */
    loading?: boolean;
    /**
     * Disables button
     */
    disabled?: boolean;
    /**
     * Content for the button loading state
     */
    loadingElement?: ReactElement;
    /**
     * Button is full width
     */
    fullWidth?: boolean;
    /**
     * Thumb content element
     */
    thumbContent?: ReactElement;
    /**
     * SwipeButton's style
     */
    style?: SwipeButtonStyle;
    /**
     * SwipeButton content
     */
    children?: ReactNode;
    /**
     * SwipeButton color
     */
    color?: ThemeColor;
}

export interface SwipeButtonRootProps {
    fullWidth: boolean;
}
