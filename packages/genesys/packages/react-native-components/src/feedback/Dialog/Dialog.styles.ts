import styled from "@peersyst/react-native-styled";
import { Text, View } from "react-native";
import { Modal } from "../Modal";

export const DialogRoot = styled(Modal)(() => ({
    width: "90%",
    maxWidth: "90%",
}));

export const DialogHeader = styled(View)(() => ({
    width: "100%",
}));

export const DialogTitle = styled(Text)(({ theme }) => ({
    color: theme.palette.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
}));

export const DialogContent = styled(View)(() => ({
    width: "100%",
}));

export const DialogMessage = styled(Text)(({ theme }) => ({
    color: theme.palette.text,
    fontSize: 14,
}));
