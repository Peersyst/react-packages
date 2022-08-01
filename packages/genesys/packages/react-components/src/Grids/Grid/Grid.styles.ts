import styled, { css } from "styled-components";
import { Property } from "csstype";

interface GridStyles {
    columns: number;
    rowSize: string | number | undefined;
    colGap: number | undefined;
    rowGap: number | undefined;
    alignItems: Property.AlignItems | undefined;
    justifyItems: Property.JustifyItems | undefined;
    justifyContent: Property.AlignItems | undefined;
}

export const GridRoot = styled.div<GridStyles>`
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-auto-flow: row dense;

    max-width: 100%;
    overflow-x: auto;

    ${({ columns, rowSize, colGap, rowGap, alignItems, justifyItems, justifyContent }) => css`
        grid-template-columns: repeat(${columns}, 1fr);
        grid-auto-rows: ${rowSize || "auto"};
        column-gap: ${colGap || 20}px;
        row-gap: ${rowGap || 20}px;
        align-items: ${alignItems};
        justify-items: ${justifyItems};
        justify-content: ${justifyContent};
    `}
`;
