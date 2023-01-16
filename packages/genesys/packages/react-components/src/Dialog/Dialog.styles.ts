import styled from "styled-components";
import { Modal } from "../Modal";
import { DialogRootProps, DialogSize } from "./Dialog.types";
import { DIALOG_SIZES_MAP } from "./Dialog.constants";
import { Row } from "../Row";

export const DialogRoot = styled(Modal)<DialogRootProps>(({ size }) => ({
    padding: 0,
    maxWidth: DIALOG_SIZES_MAP[size as DialogSize] || size,
    width: "100%",
    height: "auto",
    margin: "32px",
}));

export const DialogTitle = styled.h2(({ theme }) => ({
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: theme.palette.text,
    padding: "1rem",
    flex: "0 0 auto",
}));

export const DialogBody = styled.div({
    padding: "0 1rem",
    flex: "1 1 auto",
    overflowY: "auto",
    fontSize: "1rem",
});

export const DialogActions = styled(Row).attrs({
    gap: "0.5rem",
    alignItems: "center",
    justifyContent: "flex-end",
})({
    padding: "1rem",
    flex: "0 0 auto",
});
