import { JSXElementConstructor } from "react";
import { TablePaginationProps } from "../TablePagination";
import { TableCountProps } from "../TableCount";

export interface PaginatedTableFooterProps {
    Pagination?: JSXElementConstructor<TablePaginationProps>;
    Count?: JSXElementConstructor<TableCountProps>;
}
