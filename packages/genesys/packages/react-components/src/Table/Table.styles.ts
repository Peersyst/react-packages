import { emphasize } from "@peersyst/react-utils";
import styled, { css } from "styled-components";

export const TableRoot = styled.div(({ theme }) => {
    return css`
        --table-border-color: ${emphasize(theme.palette.text, 0.75)};
        --table-border: 1px solid var(--table-border-color);
        --table-rows-border: var(--table-border);
        --table-header-border: var(--table-rows-border);
        --table-cell-border: var(--table-rows-border);

        position: relative;
        overflow: hidden;

        display: flex;
        flex-direction: column;

        border: var(--table-border);
        border-radius: ${theme.borderRadius};
        background-color: ${theme.palette.background};

        th,
        td {
            height: inherit;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0 1rem;
            text-align: left;
            vertical-align: middle;
        }
    `;
});

export const TableContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: inherit;
`;

export const TableElement = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    background-color: inherit;
`;
