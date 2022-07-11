import { CoreToastProps, ToastType } from "@peersyst/react-components-core";
import { TextStyle, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export type ToastPosition = "top" | "bottom";

export type ToastStyle = ViewStyle & TextStyle;

export interface ToastProps extends CoreToastProps<ToastPosition> {
    /**
     * Toast style
     */
    style?: ToastStyle;
}

export interface ToastContainerStylesProps {
    position: ToastPosition;
    safeAreaInsets: EdgeInsets;
}

export interface ToastContentStylesProps {
    type?: ToastType;
}
