import styled from "styled-components";
import { Row } from "../../Row";

export const TableFooterRoot = styled(Row).attrs({
    gap: "1.25rem",
    alignItems: "center",
})`
    display: flex;

    height: 3.5rem;
    min-height: 3.5rem;
    padding: 0 1rem;

    background-color: inherit;
    border-top: var(--table-header-border);
`;
