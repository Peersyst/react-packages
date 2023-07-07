import { CSSProperties } from "react";

export interface TablePaginationProps {
    onPageChange: (page: number) => void;
    currentPage: number;
    totalPages: number;
    className?: string;
    style?: CSSProperties;
}
