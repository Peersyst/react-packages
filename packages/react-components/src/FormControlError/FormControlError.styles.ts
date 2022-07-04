import styled from "styled-components";
import { Typography } from "../Typography";

export const FormControlErrorRoot = styled(Typography).attrs({ variant: "caption" })(
    ({ theme }) => ({
        marginLeft: "5px",
        color: theme.palette.status.error,
    }),
);
