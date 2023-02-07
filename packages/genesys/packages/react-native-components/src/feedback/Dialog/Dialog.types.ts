import { ComponentsConfig, DialogProps as CoreDialogProps } from "@peersyst/react-components-core";
import { TextStyle, ViewStyle } from "react-native";

export type DialogStyle = ViewStyle & {
    title?: TextStyle;
    content?: TextStyle;
};

export interface DialogProps extends CoreDialogProps<ComponentsConfig["Dialog"]> {
    style?: DialogStyle;
}
