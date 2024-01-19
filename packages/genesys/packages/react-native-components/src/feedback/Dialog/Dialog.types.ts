import { ComponentsConfig, DialogProps as CoreDialogProps } from "@peersyst/react-components-core";
import { DimensionValue, TextStyle, ViewStyle } from "react-native";
import { ModalProps } from "../Modal";

export type DialogStyle = ViewStyle & {
    title?: ViewStyle & TextStyle;
    content?: ViewStyle & TextStyle;
    buttons?: ViewStyle;
};

export interface DialogProps
    extends CoreDialogProps<ComponentsConfig["Dialog"]>,
        Omit<ModalProps, "onExited" | "onClose"> {
    gap?: DimensionValue;
    style?: DialogStyle;
}
