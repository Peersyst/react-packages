import clsx from "clsx";
import { TablePaginationProps } from "./TablePagination.types";
import { TablePaginationRoot } from "./TablePagination.styles";

const TablePagination = ({
    currentPage,
    totalPages,
    onPageChange,
    style,
    className,
}: TablePaginationProps): JSX.Element => {
    return (
        <TablePaginationRoot
            page={currentPage}
            onChange={onPageChange}
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
