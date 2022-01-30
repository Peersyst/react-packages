import { TableRowsProps } from "./Table.types";
import { TableBody, TableCell, TableRow, TableText } from "./Table.styles";
import { cx } from "@peersyst/react-utils";

export default function TableRows<T extends object>({
    rows,
    columns,
    colGap,
    rowClassName,
    rowStyle,
}: TableRowsProps<T>): JSX.Element {
    return (
        <TableBody>
            {rows.map((row, rowIndex) => (
                <TableRow
                    gap={colGap}
                    role="row"
                    key={rowIndex}
                    aria-rowindex={rowIndex + 2}
                    className={cx("TableRow", rowClassName)}
                    style={rowStyle}
                >
                    {columns.map(({ width, field, alignment }, columnIndex) => (
                        <TableCell width={width} key={columnIndex} aria-colindex={columnIndex + 1}>
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
