import { ComponentsConfig, DialogProps as CoreDialogProps } from "@peersyst/react-components-core";
import { TextStyle, ViewStyle } from "react-native";
import { ModalProps } from "../Modal";

export type DialogStyle = ViewStyle & {
    title?: TextStyle;
    content?: TextStyle;
    buttons?: ViewStyle;
};

export interface DialogProps
    extends CoreDialogProps<ComponentsConfig["Dialog"]>,
        Omit<ModalProps, "onExited" | "onClose"> {
    gap?: string | number;
    style?: DialogStyle;
}
