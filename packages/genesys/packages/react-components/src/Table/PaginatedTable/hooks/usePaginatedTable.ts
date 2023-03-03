import { Table } from "@tanstack/react-table";
import { useTable } from "../../TableContext";

export interface UsePaginatedTableResult<TData = any> {
    table: Table<TData>;
    data: TData[];
    totalRows: number;
    totalPages: number;
    currentPage: number;
    currentRange: [number, number];
}

export default function usePaginatedTableFooter<TData = any>(): UsePaginatedTableResult<TData> {
    const { table, data, rowCount } = useTable();

    const totalRows = rowCount ?? data.length;
    const totalPages = table.getPageCount();
    const paginationState = table.getState().pagination;
    const currentPage = paginationState.pageIndex + 1;
    const currentRange: [number, number] = [
        paginationState.pageIndex * paginationState.pageSize + 1,
        Math.min((paginationState.pageIndex + 1) * paginationState.pageSize, totalRows),
    ];

    return {
        table,
        data,
        totalRows,
        totalPages,
        currentPage,
        currentRange,
    };
}
