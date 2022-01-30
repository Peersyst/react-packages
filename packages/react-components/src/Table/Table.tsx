import { TableFooter, TableRoot } from "./Table.styles";
import { TableColumnsProps, TableProps } from "./Table.types";
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";
import { cx } from "@peersyst/react-utils";

export default function Table<T extends object = Record<string, never>>({
    rows,
    columns,
    footer,
    colGap = 24,
    className,
    style,
    headerClassName,
    headerStyle,
    footerClassName,
    footerStyle,
    rowClassName,
    rowStyle,
}: TableProps<T>): JSX.Element {
    const rowProps = { colGap, rowClassName, rowStyle };
    const columnsProps: TableColumnsProps<T> = {
        ...rowProps,
        columns,
        className: headerClassName,
        style: headerStyle,
    };
    const rowsProps = { ...rowProps, rows, columns };

    return (
        <TableRoot className={cx("Table", className)} style={style}>
            <TableColumns {...columnsProps} />
            <TableRows {...rowsProps} />
            <TableFooter className={cx("TableFooter", footerClassName)} style={footerStyle}>
                {footer}
            </TableFooter>
        </TableRoot>
    );
}
