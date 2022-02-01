import { TableColumnsProps } from "./Table.types";
import { TableColumnHeader, TableColumns as TableColumnsRow, TableTitle } from "./Table.styles";
import { cx } from "@peersyst/react-utils";

export default function TableColumns<T extends object>({
    columns,
    className,
    style,
    rowClassName,
    rowStyle,
    cellClassName,
    cellStyle,
}: TableColumnsProps<T>): JSX.Element {
    return (
        <TableColumnsRow
            role="row"
            aria-rowindex={1}
            className={cx("TableColumns", "TableRow", rowClassName, className)}
            style={{ ...rowStyle, ...style }}
        >
            {columns.map(({ title, width, alignment }, index) => (
                <TableColumnHeader
                    key={index.toString()}
                    width={width}
                    role="columnheader"
                    aria-colindex={index + 1}
                    className={cx("TableColumnHeader", "TableCell", cellClassName)}
                    style={cellStyle}
                >
                    <TableTitle textAlign={alignment} singleLine className="TableTitle">
                        {title}
                    </TableTitle>
                </TableColumnHeader>
            ))}
        </TableColumnsRow>
    );
}
