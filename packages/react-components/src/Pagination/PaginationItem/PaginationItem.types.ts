import { CSSProperties, ReactNode } from "react";
import { PaginationSize } from "../Pagination.types";
import * as React from "react";

export interface PaginationItemProps {
    /**
     * onClick handler
     */
    onClick: React.ReactEventHandler;
    /**
     * Page number
     */
    page: number | null;
    /**
     * Page is selected
     */
    selected: boolean;
    /**
     * PaginationItem size
     */
    size?: PaginationSize;
    /**
     * Pagination item is disabled
     */
    disabled?: boolean;
    /**
     * Pagination item className
     */
    className?: string;
    /**
     * Pagination item style
     */
    style?: CSSProperties;
    /**
     * Pagination item content
     */
    children: ReactNode;
}

export interface PaginationItemRootProps {
    disabled: boolean;
    selected: boolean;
    size: PaginationSize;
    isEllipsis: boolean;
}
