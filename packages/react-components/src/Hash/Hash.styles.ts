import styled from "styled-components";
import { HashRootProps, HashTextProps } from "./Hash.types";
import { Row } from "../Row";
import { Typography } from "../Typography";

export const HashRoot = styled(Row).attrs({
    alignItems: "center",
})<HashRootProps>`
    width: ${(p) => p.autoLength && "auto"};
`;

export const HashText = styled(Typography)<HashTextProps>`
    word-break: ${(p) => p.break && "break-word"};
`;
