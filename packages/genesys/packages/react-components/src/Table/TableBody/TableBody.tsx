import { flexRender } from "@tanstack/react-table";
import { TableBodyRoot } from "./TableBody.styles";
import { useTable } from "../TableContext";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";
import { TableBodyProps } from "./TableBody.types";
import clsx from "clsx";

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody(
    props,
    ref,
): JSX.Element {
    const { table } = useTable();

    const rows = table.getRowModel().rows;

    const { onRowClick } = props;

    return (
        <TableBodyRoot ref={(r) => setRef(ref, r)} className="TableBody">
            {rows.map((row) => (
                <tr
                    className={clsx("TableRow TableBodyRow", onRowClick && "TableRowClickable")}
                    key={row.id}
                    onClick={() => onRowClick && onRowClick(row.original)}
                >
                    {row.getVisibleCells().map((cell) => {
                        const cellContext = cell.getContext();
                        const columnDef = cellContext.column.columnDef;

                        return (
                            <td
                                className="TableCell"
                                key={cell.id}
                                style={{
                                    textAlign: columnDef.alignCells || columnDef.align,
                                }}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        );
                    })}
                </tr>
            ))}
        </TableBodyRoot>
    );
});

export default TableBody;
