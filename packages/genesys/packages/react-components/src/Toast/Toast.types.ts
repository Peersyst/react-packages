import { CoreToastProps } from "@peersyst/react-components-core";
import { AlertProps } from "../Alert";

export type ToastPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";

export type ToastProps = CoreToastProps<ToastPosition, AlertProps>;

export interface ToastContainerStylesProps {
    position: ToastPosition;
}
