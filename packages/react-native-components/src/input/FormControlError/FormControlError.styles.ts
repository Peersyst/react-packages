import styled from "@peersyst/react-native-styled";
import { FormControlHint } from "../FormControlHint";

export const FormControlErrorRoot = styled(FormControlHint, { light: false })(({ theme }) => ({
    color: theme.palette.status.error,
}));
