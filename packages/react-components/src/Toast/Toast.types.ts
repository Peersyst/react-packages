import { CSSProperties, ReactNode } from "react";

export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-right" | "bottom-center" | "bottom-left";

export type ToastType = "info" | "success" | "error" | "warning" | "loading";

export type ToastAnimation = "fade" | "scale" | "slide" | "fadingSlide";

export interface ToastProps {
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
    action?: ReactNode;
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
