import {
    CommonModalComponentProps,
    ExtendedCoreDialogConfig,
} from "@peersyst/react-components-core";
import { ReactNode } from "react";

/**
 * Type default: shows buttons in primary color
 * Type destructive: show buttons colors in warning color
 * Type positive: show buttons colors in success color
 */
export type DialogButtonType = "default" | "destructive" | "positive";

export type DialogButton<P = {}> = {
    text: string;
    action?: () => any;
    type?: DialogButtonType;
} & P;

export type DialogButtonsLayoutJustification =
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly";

export type DialogButtonsLayoutAlignment = "start" | "end" | "center" | "stretch" | "baseline";

export interface DialogProps<P extends ExtendedCoreDialogConfig<{}> = ExtendedCoreDialogConfig<{}>>
    extends CommonModalComponentProps {
    title?: string;
    content?: ReactNode;
    buttons?: DialogButton<Omit<P["actions"], "component" | "type" | "action">>[];
    buttonsLayout?: {
        direction?: "column" | "row";
        gap?: string | number;
        justifyContent?: DialogButtonsLayoutJustification;
        alignItems?: DialogButtonsLayoutAlignment;
        wrap?: boolean;
    };
}

export interface DialogOptionProps {
    type?: DialogButtonType;
}
