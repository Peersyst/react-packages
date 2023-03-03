import styled from "styled-components";
import { Pagination } from "../../../Pagination";

export const TablePaginationRoot = styled(Pagination)`
    .PaginationItem {
        &.page,
        &.start-ellipsis,
        &.end-ellipsis {
            display: none;
        }
    }

    .PagesList {
        column-gap: 0;
    }
`;
