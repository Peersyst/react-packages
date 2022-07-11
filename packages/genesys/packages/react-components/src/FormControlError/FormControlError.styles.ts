import styled from "styled-components";
import { FormControlHint } from "../FormControlHint";

export const FormControlErrorRoot = styled(FormControlHint).attrs({ light: false })(
    ({ theme }) => ({
        color: theme.palette.status.error,
    }),
);
