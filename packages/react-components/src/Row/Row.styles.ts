import styled, { css } from "styled-components";
import { RowRootProps } from "./Row.types";

const breakpointStyles = css<RowRootProps>`
    ${({ theme, breakpoint }) => theme.breakpoints.down(breakpoint!.width)} {
        flex-direction: ${(props) => (props.breakpoint?.reverse ? "column-reverse" : "column")};
        row-gap: ${(props) =>
            props.breakpoint?.gap !== undefined &&
            (typeof props.breakpoint.gap === "number"
                ? props.breakpoint.gap + "px"
                : props.breakpoint.gap)};
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
        column-gap: ${gap !== undefined && (typeof gap === "number" ? gap + "px" : gap)};
        row-gap: ${shouldWrap &&
        wrapGap !== undefined &&
        (typeof wrapGap === "number" ? wrapGap + "px" : wrapGap)};
        flex-wrap: ${shouldWrap ? "wrap" : "nowrap"};

        ${breakpoint && breakpointStyles};
    `};
`;
