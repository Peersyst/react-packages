import { CommonModalComponentProps } from "@peersyst/react-components-core";
import { ReactNode } from "react";

/**
 * Type default: shows buttons in primary color
 * Type destructive: show buttons colors in warning color
 * Type positive: show buttons colors in success color
 */
export type DialogButtonType = "default" | "destructive" | "positive";

export interface DialogButton {
    text: string;
    action?: () => any;
    type?: DialogButtonType;
}

export interface DialogProps extends CommonModalComponentProps {
    title: string;
    content?: ReactNode;
    buttons?: DialogButton[];
}

export interface DialogOptionProps {
    type?: DialogButtonType;
}
