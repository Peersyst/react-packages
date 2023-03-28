import { Loosen } from "@peersyst/react-types";
import { SortingState, TableOptions, createColumnHelper } from "@tanstack/react-table";
import { CSSProperties, ForwardedRef, ReactElement } from "react";

export type TableAlignment = "left" | "center" | "right";

export interface InnerTableProps<TData = any>
    extends Loosen<TableOptions<TData>, "getCoreRowModel"> {
    rowCount?: number;
    noRowsElement?: ReactElement;
    loading?: boolean;
    footer?: ReactElement;
    className?: string;
    style?: CSSProperties;
    sorting?: SortingState;
}

export interface TableProps<TData = any> extends InnerTableProps<TData> {
    ref?: ForwardedRef<HTMLDivElement>;
}

export type TableInstance = (<TData>(props: TableProps<TData>) => JSX.Element) & {
    createColumnHelper: typeof createColumnHelper;
};
