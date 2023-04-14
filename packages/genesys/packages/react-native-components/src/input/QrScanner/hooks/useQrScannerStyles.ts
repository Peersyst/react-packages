import { ViewStyle } from "react-native";
import { QrScannerProps } from "../QrScanner.types";
import { useComputeStyles } from "../../../hooks";

export default function useQrScannerStyles(props: QrScannerProps): ViewStyle {
    return useComputeStyles("QrScanner", props);
}
