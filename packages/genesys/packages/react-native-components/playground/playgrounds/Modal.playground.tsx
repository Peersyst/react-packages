import { Button, Modal, ModalProps, Row, ScrollView, TextField, useToast, Col } from "../../src";
import playground from "../playground";
import { useState } from "react";
import styled from "@peersyst/react-native-styled";

export const StyledModal = styled(Modal)(({ safeAreaInsets, dimensions }) => ({
    backgroundColor: "white",
}));

const Wrapper = (props: ModalProps): JSX.Element => {
    const [open, setOpen] = useState(false);
    const { showToast } = useToast();
    return (
        <>
            <StyledModal open={open} {...props} avoidKeyboard={true} onClose={() => setOpen(false)}>
                <Button onPress={() => showToast("WORKS :)")}>Show toast</Button>
            </StyledModal>
            <Col gap={20}>
                <Button onPress={() => showToast("WORKS :)")}>Show toast</Button>
                <Button onPress={() => setOpen(true)}>Open modal</Button>
            </Col>
        </>
    );
};

export default playground("Modal", Wrapper, {});
