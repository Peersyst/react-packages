import { CoreToastProps, ToastType } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

export type ToastPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";

export interface ToastProps extends CoreToastProps<ToastPosition> {
    /**
     * Toast className
     */
    className?: string;
    /**
     * Toast style
     */
    style?: CSSProperties;
}

export interface ToastContainerStylesProps {
    position: ToastPosition;
}

export interface ToastContentStylesProps {
    type?: ToastType;
}
