import { CoreAlertProps } from "@peersyst/react-components-core";
import { TextStyle, ViewStyle } from "react-native";
import { PaperProps } from "../../surface/Paper";

export type AlertStyle = ViewStyle & TextStyle;

export interface AlertProps extends CoreAlertProps, Omit<PaperProps, "style"> {
    /**
     * Alert style
     */
    style?: AlertStyle;
}
