import styled, { css } from "styled-components";
import { ColProps } from "./Col.types";

export const ColRoot = styled.div<ColProps>`
    display: flex;
    flex-direction: column;
    ${({ flex, alignItems, justifyContent, gap }) => css`
        flex: ${flex};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        row-gap: ${gap ? gap + "px" : undefined};
    `}
`;
