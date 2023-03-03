import {
    OnChangeFn,
    SortingState,
    Updater,
    createColumnHelper,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import { InnerTableProps, TableInstance, TableProps } from "./Table.types";
import { setRef } from "@peersyst/react-utils";
import { TableRoot, TableElement, TableContainer } from "./Table.styles";
import clsx from "clsx";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";
import { TableContextType, TableProvider } from "./TableContext";
import { TableLoadingOverlay } from "./TableLoadingOverlay";
import { TableNoRowsOverlay } from "./TableNoRowsOverlay";

const InnerTable = forwardRef(function InnerTable(
    {
        footer,
        className,
        style,
        loading = false,
        noRowsElement,
        rowCount,
        onSortingChange,
        state,
        data,
        autoResetPageIndex = false,
        ...tableOptions
    }: InnerTableProps,
    ref: ForwardedRef<HTMLDivElement>,
): JSX.Element {
    const containerRef = useRef<HTMLDivElement>();
    const headerRef = useRef<HTMLDivElement>();

    const [sorting, setSorting] = useState<SortingState>([]);

    const handleSortingChange: OnChangeFn<SortingState> = (updater: Updater<SortingState>) => {
        const sortingState = typeof updater === "function" ? updater(sorting) : updater;
        onSortingChange?.(sortingState);
        setSorting(sortingState);
    };

    const table = useReactTable({
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: handleSortingChange,
        state: {
            ...state,
            sorting: state?.sorting || sorting,
        },
        data,
        autoResetPageIndex,
        ...tableOptions,
    });

    const rows = table.getRowModel().rows;

    const [context, setContext] = useState<TableContextType>({
        table,
        data,
        rowCount,
    });

    useEffect(() => {
        setContext({ table, data, rowCount });
    }, [table, data, rowCount]);

    return (
        <TableRoot className={clsx("TableRoot", className)} ref={ref} style={style}>
            <TableProvider value={context}>
                <TableContainer ref={(r) => setRef(containerRef, r)}>
                    <TableElement className="Table">
                        <TableHead ref={headerRef} />
                        <TableBody />
                    </TableElement>
                </TableContainer>
                {!loading && !rows.length && (
                    <TableNoRowsOverlay
                        containerRef={containerRef}
                        headerRef={headerRef}
                        noRowsElement={noRowsElement}
                    />
                )}
                <TableLoadingOverlay
                    containerRef={containerRef}
                    headerRef={headerRef}
                    loading={loading}
                />
                {footer && <TableFooter>{footer}</TableFooter>}
            </TableProvider>
        </TableRoot>
    );
});

function Table<TData = any>(props: TableProps<TData>): JSX.Element {
    return <InnerTable {...props} />;
}

Table.createColumnHelper = createColumnHelper;

export default Table as TableInstance;
