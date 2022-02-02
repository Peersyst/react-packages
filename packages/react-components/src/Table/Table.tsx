import { TableFooter, TableLoadMoreRow, TableRoot } from "./Table.styles";
import { TableBorders, TableColumnsProps, TableProps, TableRootProps } from "./Table.types";
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";
import { cx } from "@peersyst/react-utils";
import { createRef, ReactElement } from "react";
import { InfiniteScroll } from "../InfiniteScroll";

export default function Table<T extends object = Record<string, never>>({
    rows,
    columns,
    footer,
    className,
    style,
    headerClassName,
    headerStyle,
    footerClassName,
    footerStyle,
    rowClassName,
    rowStyle,
    cellStyle,
    cellClassName,
    rowHeight = "52px",
    headerHeight = "56px",
    footerHeight,
    infiniteProps,
    borders: bordersProp = {
        outline: true,
        horizontal: true,
        vertical: true,
    },
}: TableProps<T>): JSX.Element {
    const rowProps = { rowClassName, rowStyle, cellClassName, cellStyle };
    const columnsProps: TableColumnsProps<T> = {
        ...rowProps,
        columns,
        className: headerClassName,
        style: headerStyle,
    };
    const rowsProps = { ...rowProps, rows, columns };
    const borders: TableBorders = {
        outline: bordersProp?.outline ?? true,
        horizontal: bordersProp?.horizontal ?? true,
        vertical: bordersProp?.vertical ?? true,
    };
    const tableRootProps: TableRootProps = { borders, rowHeight, headerHeight, footerHeight };

    const { loadMoreElement } =
        (infiniteProps as { loadMoreElement?: ReactElement } | undefined) || {};
    const {
        callback = () => undefined,
        loading = false,
        end = true,
        observerOffset,
        loaderElement,
    } = (infiniteProps as
        | {
              callback: (...args: unknown[]) => unknown;
              loading: boolean;
              end: boolean;
              observerOffset?: string;
              loaderElement?: ReactElement;
          }
        | undefined) || {};

    const tableRef = createRef<HTMLDivElement>();

    return (
        <TableRoot
            ref={tableRef}
            className={cx("Table", className)}
            style={style}
            {...tableRootProps}
        >
            <TableColumns {...columnsProps} />
            <InfiniteScroll
                callback={callback}
                loading={loading}
                end={end}
                loaderElement={loaderElement}
                observerOffset={observerOffset}
                container={tableRef}
            >
                <TableRows {...rowsProps} />
                {loadMoreElement && <TableLoadMoreRow>{loadMoreElement}</TableLoadMoreRow>}
            </InfiniteScroll>
            {footer && (
                <TableFooter
                    className={cx("TableFooter", "TableRow", footerClassName)}
                    style={footerStyle}
                >
                    {footer}
                </TableFooter>
            )}
        </TableRoot>
    );
}
