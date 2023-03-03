import styled from "styled-components";

export const TableBodyRoot = styled.tbody`
    position: relative;

    background-color: inherit;

    tr {
        height: 3.25rem;

        td {
            border-bottom: var(--table-cell-border);
        }
    }
`;
