import { AlertType, CoreAlertProps } from "../Alert";

export type ToastType = AlertType;

export type ToastAnimation = "fade" | "scale" | "slide" | "fadingSlide";

export type CoreToastProps<
    ToastPosition,
    AlertProps extends CoreAlertProps = CoreAlertProps,
> = AlertProps & {
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
};

/**
 * @deprecated
 */
export type ToastProps = Pick<CoreToastProps<any>, "type" | "duration" | "open" | "onClose"> & {
    /**
     * Toast renderer
     */
    children: (open: boolean, setOpen: (open: boolean) => void) => JSX.Element;
};
