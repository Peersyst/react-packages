import { Typography } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledTypography = styled(Typography)(() => ({
    currentColor: "red",
}));

export default playground("Typography", StyledTypography, {
    color: "primary",
    children: "label",
    variant: "body1",
});
