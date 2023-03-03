import clsx from "clsx";
import { TablePaginationProps } from "./TablePagination.types";
import { TablePaginationRoot } from "./TablePagination.styles";

const TablePagination = ({
    currentPage,
    totalPages,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    style,
    className,
}: TablePaginationProps): JSX.Element => {
    const handleChange = (page: number) => {
        if (page > currentPage) onNextPage();
        else if (page < currentPage) onPreviousPage();
        else if (page === 0) onFirstPage();
        else onLastPage();
    };

    return (
        <TablePaginationRoot
            page={currentPage}
            onChange={handleChange}
            count={totalPages}
            style={style}
            className={clsx("TablePagination", className)}
            siblingCount={0}
            boundaryCount={0}
            size="lg"
        />
    );
};

export default TablePagination;
