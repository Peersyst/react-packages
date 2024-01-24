import { Button, Modal, ModalProps, Row, ScrollView, TextField } from "../../src";
import playground from "../playground";
import { useState } from "react";
import styled from "@peersyst/react-native-styled";

export const StyledModal = styled(Modal)(({ safeAreaInsets, dimensions }) => ({
    position: "absolute",
    bottom: Math.max(safeAreaInsets.bottom, 20),
    minWidth: "100%",
    maxWidth: dimensions.width - 40,
    maxHeight: dimensions.height * 0.9,
    borderRadius: 16,
    padding: 0,
    backgroundColor: "white",
}));

const Wrapper = (props: ModalProps): JSX.Element => {
    const [open, setOpen] = useState(false);
    return (
        <Row style={{}}>
            <StyledModal open={open} {...props} avoidKeyboard={true} onClose={() => setOpen(false)}>
                <ScrollView style={{ flex: 1 }}>
                    <TextField label="Test" />
                </ScrollView>
            </StyledModal>
            <Button onPress={() => setOpen(true)}>Open</Button>
        </Row>
    );
};

export default playground("Modal", Wrapper, {});
