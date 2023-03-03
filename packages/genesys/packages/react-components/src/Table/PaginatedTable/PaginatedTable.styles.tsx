import styled from "styled-components";
import Table from "../Table";

export const PaginatedTableRoot = styled(Table)`
    .TableFooter {
        justify-content: flex-end;
    }
` as typeof Table; // Recover generic type
