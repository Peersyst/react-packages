import { ViewStyle } from "react-native";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { QrScannerProps } from "../QrScanner.types";

export default function useQrScannerStyles(props: QrScannerProps): ViewStyle {
    const { style } = props;

    const stylesheet = useStylesheet<QrScannerProps>("QrScanner");

    const mergedStylesheet = useMergeStylesheets<QrScannerProps>(stylesheet, style);
    return useResolveStylesheet(props, mergedStylesheet);
}
