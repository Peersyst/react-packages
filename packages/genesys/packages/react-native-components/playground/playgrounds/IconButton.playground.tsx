import { CrossIcon, IconButton } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.status.error,
}));

export default playground("IconButton", StyledIconButton, {
    children: <CrossIcon />,
});
