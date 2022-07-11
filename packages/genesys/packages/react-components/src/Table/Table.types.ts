import { CSSProperties, ReactElement, ReactNode } from "react";

export interface TableBorders {
    outline?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}

export type TableInfiniteProps =
    | {
          loadMoreElement: ReactNode;
      }
    | {
          callback: (...args: unknown[]) => unknown;
          loading: boolean;
          end: boolean;
          observerOffset?: string;
          loaderElement?: ReactElement;
      };

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
     * onRowClick handler
     */
    onRowClick?: (index: number) => unknown;
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
     * Infinite props
     */
    infiniteProps?: TableInfiniteProps;
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
    /**
     * Empty table component
     */
    emptyElement?: ReactElement;
}

export type ColAlignment = "left" | "center" | "right";

export interface TableCol<T> {
    field: keyof T;
    title: string;
    width: string;
    alignment?: ColAlignment;
    popover?: boolean;
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
     * onRowClick handler
     */
    onRowClick?: (index: number) => unknown;
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
    /**
     * Empty table component
     */
    emptyElement?: ReactElement;
}