import { CSSProperties } from "react";

export interface TablePaginationProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    onFirstPage: () => void;
    onLastPage: () => void;
    currentPage: number;
    totalPages: number;
    className?: string;
    style?: CSSProperties;
}
