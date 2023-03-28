import styled, { css } from "styled-components";
import { HashRootProps, HashTextProps } from "./Hash.types";
import { Row } from "../Row";
import { Typography } from "../Typography";

export const HashRoot = styled(Row).attrs({
    alignItems: "center",
})<HashRootProps>(
    ({ autoLength }) => css`
        ${autoLength &&
        css`
            width: 100%;
            max-width: 100%;
            overflow: hidden;
        `}
    `,
);

export const HashText = styled(Typography)<HashTextProps>`
    word-break: ${(p) => p.break && "break-word"};
`;

export const HashLink = styled.a(
    () => css`
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    `,
);
