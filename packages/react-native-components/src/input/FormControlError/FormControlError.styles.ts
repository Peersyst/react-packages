import styled from "@peersyst/react-native-styled";
import { Typography } from "../../display/Typography";

export const FormControlHintRoot = styled(Typography)(({ theme }) => ({
    marginLeft: 5,
    color: theme.palette.status.error,
}));
