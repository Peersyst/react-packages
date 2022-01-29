import { CSSProperties, ReactNode } from "react";

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
     * Table column gap
     */
    colGap?: number;
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
}

export type ColAlignment = "left" | "center" | "right";

export interface TableCol<T> {
    field: keyof T;
    title: string;
    width: number;
    alignment?: ColAlignment;
}

export interface TableCellStyleProps {
    width: number;
}

export interface TableColumnsProps<T> {
    /**
     * Table columns
     */
    columns: TableCol<T>[];
    /**
     * Table column gap
     */
    colGap: number;
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
     * Table column gap
     */
    colGap: number;
    /**
     * Table row className
     */
    rowClassName: string | undefined;
    /**
     * Table row style
     */
    rowStyle: CSSProperties | undefined;
}
