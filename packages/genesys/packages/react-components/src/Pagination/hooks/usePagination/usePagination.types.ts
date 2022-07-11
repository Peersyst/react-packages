import * as React from "react";

export interface UsePaginationProps {
    /**
     * Number of always visible pages at the beginning and end.
     * @default 1
     */
    boundaryCount?: number;
    /**
     * The total number of pages.
     * @default 1
     */
    count?: number;
    /**
     * The page selected by default when the component is uncontrolled.
     * @default 1
     */
    defaultPage?: number;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, hide the next-page button.
     * @default false
     */
    hideNextButton?: boolean;
    /**
     * If `true`, hide the previous-page button.
     * @default false
     */
    hidePrevButton?: boolean;
    /**
     * Callback fired when the page is changed.
     *
     */
    onChange?: (page: number) => unknown;
    /**
     * The current page.
     */
    page?: number;
    /**
     * If `true`, show the first-page button.
     * @default false
     */
    showFirstButton?: boolean;
    /**
     * If `true`, show the last-page button.
     * @default false
     */
    showLastButton?: boolean;
    /**
     * Number of always visible pages before and after the current page.
     * @default 1
     */
    siblingCount?: number;
}

export type PaginationItemType =
    | "page"
    | "first"
    | "last"
    | "next"
    | "previous"
    | "start-ellipsis"
    | "end-ellipsis";

export interface UsePaginationItem {
    onClick: React.ReactEventHandler;
    type: PaginationItemType;
    page: number | null;
    selected: boolean;
    disabled: boolean;
}

export type UsePaginationResult = UsePaginationItem[];
