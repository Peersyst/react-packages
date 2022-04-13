import { TableRowsProps } from "./Table.types";
import { TableBody, TableCell, TableRow, TableText } from "./Table.styles";
import { cx } from "@peersyst/react-utils";

export default function TableRows<T extends object>({
    rows,
    columns,
    rowClassName,
    rowStyle,
    cellClassName,
    cellStyle,
    onRowClick,
}: TableRowsProps<T>): JSX.Element {
    return (
        <TableBody>
            {rows.map((row, rowIndex) => (
                <TableRow
                    role="row"
                    key={rowIndex}
                    aria-rowindex={rowIndex + 2}
                    className={cx("TableRow", rowClassName)}
                    style={rowStyle}
                    onClick={onRowClick && (() => onRowClick(rowIndex))}
                >
                    {columns.map(({ width, field, alignment }, columnIndex) => (
                        <TableCell
                            width={width}
                            key={columnIndex}
                            aria-colindex={columnIndex + 1}
                            className={cx("TableCell", cellClassName)}
                            style={cellStyle}
                        >
                            <TableText singleLine textAlign={alignment}>
                                {row[field]}
                            </TableText>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
}
