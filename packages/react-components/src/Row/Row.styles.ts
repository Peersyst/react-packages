import styled, { css } from "styled-components";
import { RowRootProps } from "./Row.types";

const breakpointStyles = css<RowRootProps>`
    ${({ theme, breakpoint }) => theme.breakpoints.down(breakpoint!.width)} {
        flex-direction: ${(props) => (props.breakpoint?.reverse ? "column-reverse" : "column")};
        row-gap: ${(props) => props.breakpoint?.gap + "px"};
        align-items: ${(props) => props.breakpoint?.alignItems || "flex-start"};
        justify-content: ${(props) => props.breakpoint?.justifyContent || "flex-start"};
    }
`;

export const RowRoot = styled.div<RowRootProps>`
    display: flex;

    ${({ flex, alignItems, justifyContent, gap, shouldWrap, breakpoint, reverse, wrapGap }) => css`
        flex: ${flex};
        flex-direction: ${reverse ? "row-reverse" : "row"};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        column-gap: ${gap ? gap + "px" : undefined};
        row-gap: ${shouldWrap && wrapGap}px;
        flex-wrap: ${shouldWrap ? "wrap" : "nowrap"};

        ${breakpoint && breakpointStyles};
    `};
`;
