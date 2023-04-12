import { AlertStyle } from "../../Alert";
import { ToastProps } from "../Toast.types";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";
export default function useToastStyles(props: ToastProps): AlertStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("Alert");
    const stylesheet = useStylesheet<ToastProps>("Alert");

    const mergedStyles = useMergeStylesheets<ToastProps>(stylesheet, defaultStyle, style);

    return useResolveStylesheet(props, mergedStyles);
}
