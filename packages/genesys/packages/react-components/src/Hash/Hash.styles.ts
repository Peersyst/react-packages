import styled, { css } from "styled-components";
import { HashRootProps, HashTextProps, HashLinkProps } from "./Hash.types";
import { Row } from "../Row";
import { Typography } from "../Typography";

export const HashRoot = styled(Row).attrs({
    alignItems: "center",
})<HashRootProps>`
    width: 100%;
    max-width: 100%;
`;

export const HashLink = styled.a<HashLinkProps>(
    ({ url }) => css`
        text-decoration: none;
        &:hover {
            text-decoration: ${url ? "underline" : "none"};
        }
    `,
);

export const HashText = styled(Typography)<HashTextProps>`
    word-break: ${(p) => p.break && "break-word"};
`;
