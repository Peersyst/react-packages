import { TableFooter, TableRoot } from "./Table.styles";
import { TableBorders, TableColumnsProps, TableProps } from "./Table.types";
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

    return (
        <TableRoot className={cx("Table", className)} style={style} borders={borders} role="table">
            <TableColumns {...columnsProps} />
            <TableRows {...rowsProps} />
            {footer && (
                <TableFooter className={cx("TableFooter", footerClassName)} style={footerStyle}>
                    {footer}
                </TableFooter>
            )}
        </TableRoot>
    );
}
