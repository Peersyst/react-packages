import { ToastContainerStylesProps, ToastPosition } from "./Toast.types";
import { View } from "react-native";
import styled from "@peersyst/react-native-styled";
import { Alert } from "../Alert";

function getPosition(position: ToastPosition): {
    bottom: number | undefined;
    left: number;
    top: number | undefined;
} {
    switch (position) {
        case "bottom":
            return {
                bottom: 24,
                left: 24,
                top: undefined,
            };
        case "top":
            return {
                top: 24,
                left: 24,
                bottom: undefined,
            };
    }
}

export const ToastContainer = styled(View)<ToastContainerStylesProps>(
    ({
        position,
        theme,
        safeAreaInsets: { top: topInset, left: leftInset, bottom: bottomInset },
    }) => {
        const { left, bottom, top } = getPosition(position);
        return {
            position: "absolute",
            left: left + leftInset,
            bottom: bottom ? bottom + bottomInset : undefined,
            top: top ? top + topInset : undefined,
            zIndex: theme.zIndex.toast,
        };
    },
);

export const ToastAlert = styled(Alert)(({ dimensions: { width } }) => ({
    width: width - 48,
}));
