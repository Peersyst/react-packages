import styled, { css } from "styled-components";
import { Property } from "csstype";

interface IrregularGridStyles {
    cells: number;
    rowSize: string | number | undefined;
    colGap: number | undefined;
    rowGap: number | undefined;
    alignItems: Property.AlignItems | undefined;
    justifyItems: Property.JustifyItems | undefined;
    justifyContent: Property.AlignItems | undefined;
}

export const IrregularGridRoot = styled.div<IrregularGridStyles>`
    display: grid;
    grid-auto-flow: row dense;

    max-width: 100%;
    overflow-x: auto;

    ${({ cells, rowSize, colGap, rowGap, alignItems, justifyItems, justifyContent }) => css`
        grid-template-columns: repeat(${cells}, 1fr);
        grid-auto-rows: ${rowSize || "auto"};
        column-gap: ${colGap || 20}px;
        row-gap: ${rowGap || 20}px;
        align-items: ${alignItems};
        justify-items: ${justifyItems};
        justify-content: ${justifyContent};
    `}
`;
