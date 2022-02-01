import { CSSProperties, ReactNode } from "react";

export interface TableBorders {
    outline?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}

export interface TableProps<T extends object> {
    /**
     * Table rows
     */
    rows: T[];
    /**
     * Table columns
     */
    columns: TableCol<T>[];
    /**
     * Table footer content
     */
    footer?: ReactNode;
    /**
     * Table rows height
     */
    rowHeight?: string;
    /**
     * Table header height
     */
    headerHeight?: string;
    /**
     * Table footer height
     */
    footerHeight?: string;
    /**
     * Table borders
     */
    borders?: TableBorders;
    /**
     * Table className
     */
    className?: string;
    /**
     * Table style
     */
    style?: CSSProperties;
    /**
     * Table header className
     */
    headerClassName?: string;
    /**
     * Table header style
     */
    headerStyle?: CSSProperties;
    /**
     * Table footer className
     */
    footerClassName?: string;
    /**
     * Table footer style
     */
    footerStyle?: CSSProperties;
    /**
     * Table row className
     */
    rowClassName?: string;
    /**
     * Table row style
     */
    rowStyle?: CSSProperties;
    /**
     * Table cell className
     */
    cellClassName?: string;
    /**
     * Table cell style
     */
    cellStyle?: CSSProperties;
}

export type ColAlignment = "left" | "center" | "right";

export interface TableCol<T> {
    field: keyof T;
    title: string;
    width: string;
    alignment?: ColAlignment;
}

export interface TableRootProps {
    borders: TableBorders;
    rowHeight: string;
    headerHeight: string;
    footerHeight?: string;
}

export interface TableCellStyleProps {
    width: string;
}

export interface TableColumnsProps<T> {
    /**
     * Table columns
     */
    columns: TableCol<T>[];
    /**
     * Table header className
     */
    className: string | undefined;
    /**
     * Table header style
     */
    style: CSSProperties | undefined;
    /**
     * Table row className
     */
    rowClassName: string | undefined;
    /**
     * Table row style
     */
    rowStyle: CSSProperties | undefined;
    /**
     * Table cell className
     */
    cellClassName: string | undefined;
    /**
     * Table cell style
     */
    cellStyle: CSSProperties | undefined;
}

export interface TableRowsProps<T> {
    /**
     * Table rows
     */
    rows: T[];
    /**
     * Table columns
     */
    columns: TableCol<T>[];
    /**
     * Table row className
     */
    rowClassName: string | undefined;
    /**
     * Table row style
     */
    rowStyle: CSSProperties | undefined;
    /**
     * Table cell className
     */
    cellClassName: string | undefined;
    /**
     * Table cell style
     */
    cellStyle: CSSProperties | undefined;
}
