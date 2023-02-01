import styled from "@peersyst/react-native-styled";
import { Text } from "react-native";
import { Modal } from "../Modal";

export const DialogRoot = styled(Modal)(() => ({
    width: "90%",
    maxWidth: "90%",
}));

export const DialogTitle = styled(Text)(({ theme }) => ({
    color: theme.palette.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
}));

export const DialogMessage = styled(Text)(({ theme }) => ({
    color: theme.palette.text,
    fontSize: 14,
}));
