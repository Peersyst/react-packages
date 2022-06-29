import styled from "styled-components";
import { Typography } from "../Typography";

export const FormControlHintRoot = styled(Typography).attrs({ variant: "caption", light: true })(
    () => ({
        marginLeft: "5px",
    }),
);
