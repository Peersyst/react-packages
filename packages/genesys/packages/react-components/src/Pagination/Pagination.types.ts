import { CSSProperties, ReactElement } from "react";

export type PaginationSize = "sm" | "md" | "lg";

export interface PaginationProps {
    /**
     * Page selected by default
     */
    defaultPage?: number;
    /**
     * Current page
     */
    page?: number;
    /**
     * onChange handler
     */
    onChange?: (page: number) => unknown;
    /**
     * Number of pages
     */
    count: number;
    /**
     * Number of always visible pages before and after the current page.
     */
    siblingCount?: number;
    /**
     *
     Number of always visible pages at the beginning and end.
     */
    boundaryCount?: number;
    /**
     * Disable component
     */
    disabled?: boolean;
    /**
     * Pagination previous icon
     */
    previousIcon?: ReactElement | boolean;
    /**
     * Pagination next icon
     */
    nextIcon?: ReactElement | boolean;
    /**
     * Pagination previous icon
     */
    startIcon?: ReactElement | boolean;
    /**
     * Pagination next icon
     */
    endIcon?: ReactElement | boolean;
    /**
     * Pagination size
     */
    size?: PaginationSize;
    /**
     * Pagination className
     */
    className?: string;
    /**
     * Pagination style
     */
    style?: CSSProperties;
}

export interface PagesListProps {
    size: PaginationSize;
}
