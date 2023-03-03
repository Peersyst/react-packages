import { PaginatedTableFooterProps } from "./PaginatedTableFooter.types";
import { TablePagination } from "../TablePagination";
import { TableCount } from "../TableCount";
import { usePaginatedTable } from "../hooks";

function PaginatedTableFooter<TData = any>({
    Pagination = TablePagination,
    Count = TableCount,
}: PaginatedTableFooterProps): JSX.Element {
    const { table, totalRows, totalPages, currentPage, currentRange } = usePaginatedTable<TData>();

    return (
        <>
            <Count range={currentRange} total={totalRows} />
            <Pagination
                onFirstPage={() => table.setPageIndex(0)}
                onLastPage={() => table.setPageIndex(table.getPageCount() - 1)}
                onNextPage={() => table.nextPage()}
                onPreviousPage={() => table.previousPage()}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}

export default PaginatedTableFooter;
