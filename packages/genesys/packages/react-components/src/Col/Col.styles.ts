import styled, { css } from "styled-components";
import { ColProps } from "./Col.types";

export const ColRoot = styled.div<ColProps>`
    display: flex;
    ${({ flex, alignItems, justifyContent, gap, reverse }) => css`
        flex-direction: ${reverse ? "column-reverse" : "column"};
        flex: ${flex};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        row-gap: ${gap !== undefined && (typeof gap === "number" ? gap + "px" : gap)};
    `}
`;
