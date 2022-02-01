import { TableFooter, TableRoot } from "./Table.styles";
import { TableBorders, TableColumnsProps, TableProps, TableRootProps } from "./Table.types";
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";
import { cx } from "@peersyst/react-utils";

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

    return (
        <TableRoot className={cx("Table", className)} style={style} {...tableRootProps}>
            <TableColumns {...columnsProps} />
            <TableRows {...rowsProps} />
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
