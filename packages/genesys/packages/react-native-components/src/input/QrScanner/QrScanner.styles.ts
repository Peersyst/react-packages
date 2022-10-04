import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { IconButton } from "../IconButton";

export const IdleQrScanner = styled(View)(() => ({
    width: "100%",
    height: "100%",
    backgroundColor: "black",
}));

export const QrScannerRoot = styled(View)(() => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
}));

export const BackButton = styled(IconButton)(({ safeAreaInsets }) => ({
    position: "absolute",
    left: 20,
    top: 30 + safeAreaInsets.top,
}));

export const ChildrenWrapper = styled(View)(() => ({
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
}));
