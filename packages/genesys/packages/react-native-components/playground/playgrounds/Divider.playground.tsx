import { Divider } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledDivider = styled(Divider)(({ theme }) => ({
    currentColor: theme.palette.status.success,
}));

export default playground("Divider", StyledDivider, {
    color: "primary",
});
