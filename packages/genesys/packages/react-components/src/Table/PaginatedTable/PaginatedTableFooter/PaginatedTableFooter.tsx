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
                onPageChange={(pageIndex: number) => table.setPageIndex(pageIndex - 1)}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}

export default PaginatedTableFooter;
