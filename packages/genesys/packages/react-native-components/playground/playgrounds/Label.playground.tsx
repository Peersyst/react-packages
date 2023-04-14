import { Label, Typography } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledLabel = styled(Label)(() => ({
    currentColor: "red",
    label: {
        currentColor: "blue",
    },
}));

export default playground("Label", StyledLabel, {
    color: "primary",
    children: <Typography variant="body1">Content</Typography>,
    label: "Label",
});
