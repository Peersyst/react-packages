import { ReactElement } from "react";

export type ToastType = "info" | "success" | "error" | "warning" | "loading";

export type ToastAnimation = "fade" | "scale" | "slide" | "fadingSlide";

export interface CoreToastProps<ToastPosition> {
    /**
     * Toast message
     */
    message: string;
    /**
     * Toast type
     */
    type?: ToastType;
    /**
     * Toast actions
     */
    action?: ReactElement;
    /**
     * Toast position
     */
    position?: ToastPosition;
    /**
     * Toast is open
     */
    open?: boolean;
    /**
     * onClose handler
     */
    onClose?: () => unknown;
    /**
     * onExited handler
     */
    onExited?: () => unknown;
    /**
     * Toast animation
     */
    animation?: ToastAnimation;
    /**
     * Toast duration, infinity for type = loading
     */
    duration?: number;
}
