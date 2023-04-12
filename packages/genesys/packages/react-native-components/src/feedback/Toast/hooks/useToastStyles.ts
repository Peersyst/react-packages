import { AlertStyle } from "../../Alert";
import { ToastProps } from "../Toast.types";
import { useMergeStylesheets, useStylesheet } from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";
export default function useToastStyles(props: ToastProps): AlertStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("Alert");
    const stylesheet = useStylesheet<ToastProps>("Alert");

    // Resolved by Alert in useAlertStyles
    return useMergeStylesheets<ToastProps>(stylesheet, defaultStyle, style);
}
