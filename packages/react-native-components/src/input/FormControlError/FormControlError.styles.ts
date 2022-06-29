import styled from "@peersyst/react-native-styled";
import { FormControlHint } from "../FormControlHint";

export const FormControlErrorRoot = styled(FormControlHint)(({ theme }) => ({
    color: theme.palette.status.error,
}));
