import styled from "styled-components";
import { FormControlHint } from "../FormControlHint";

export const FormControlErrorRoot = styled(FormControlHint)(({ theme }) => ({
    color: theme.palette.status.error,
}));
