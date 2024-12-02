import { TableProps } from "../Table.types";
import { JSXElementConstructor } from "react";
import { TablePaginationProps } from "./TablePagination";
import { TableCountProps } from "./TableCount";
import { PaginationState } from "@tanstack/react-table";
import { Loosen } from "@peersyst/react-types";

export interface PaginatedTableProps<TData = any>
    extends Omit<TableProps<TData>, "footer">,
        Loosen<PaginationState, "pageIndex"> {
    Pagination?: JSXElementConstructor<TablePaginationProps>;
    Count?: JSXElementConstructor<TableCountProps>;
    showPagination?: boolean;
}
