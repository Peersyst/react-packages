import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { IconButton } from "../IconButton";

export const IdleQrScanner = styled(View)(() => ({
    width: "120%",
    height: "120%",
    backgroundColor: "black",
}));

export const QrScannerRoot = styled(View)(() => ({
    width: "120%",
    height: "120%",
    alignItems: "center",
    justifyContent: "center",
}));

export const BackButton = styled(IconButton)(() => {
    return {
        position: "absolute",
        left: 20,
        top: 40,
    };
});

export const ChildrenWrapper = styled(View)(({ dimensions: { width, height } }) => ({
    position: "absolute",
    height: height,
    width: width,
}));
