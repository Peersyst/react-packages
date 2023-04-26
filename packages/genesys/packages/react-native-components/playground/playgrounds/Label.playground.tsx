import { Label, Typography, Col } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledLabel = styled(Label)(() => ({
    currentColor: "red",
    label: {
        currentColor: "blue",
    },
}));

const Display = () => {
    return (
        <Col style={{ width: "100%", height: "100%" }}>
            <StyledLabel color="primary" label="Label">
                <Typography variant="body1">Content</Typography>
            </StyledLabel>
        </Col>
    );
};

export default playground("Label", Display);
