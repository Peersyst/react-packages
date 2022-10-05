import { CameraProps } from "expo-camera";
import { ReactElement, ReactNode } from "react";
import { ExposedBackdropProps } from "../../feedback/Backdrop";
import { ViewStyle } from "react-native";

export interface QrScannerProps
    extends Omit<
        ExposedBackdropProps,
        | "animationIn"
        | "animationOut"
        | "animationInTiming"
        | "animationOutTiming"
        | "renderBackdrop"
        | "closable"
        | "defaultOpen"
    > {
    back?: ReactElement;
    onScan: NonNullable<CameraProps["onBarCodeScanned"]>;
    style?: ViewStyle;
    children?: ReactNode;
}
