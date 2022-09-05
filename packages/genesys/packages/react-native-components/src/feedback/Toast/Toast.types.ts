import { CoreToastProps } from "@peersyst/react-components-core";
import { EdgeInsets } from "react-native-safe-area-context";
import { AlertProps } from "../Alert";

export type ToastPosition = "top" | "bottom";

export type ToastProps = CoreToastProps<ToastPosition, AlertProps>;

export interface ToastContainerStylesProps {
    position: ToastPosition;
    safeAreaInsets: EdgeInsets;
}
