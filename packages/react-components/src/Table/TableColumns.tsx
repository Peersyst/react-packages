import React from "react";
import { TableColumnsProps } from "./Table.types";
import { TableColumnHeader, TableColumns as TableColumnsRow, TableTitle } from "./Table.styles";
import { cx } from "../utils/cx";

export function TableColumns<T extends object>({
    columns,
    colGap,
    className,
    style,
    rowClassName,
    rowStyle,
}: TableColumnsProps<T>): JSX.Element {
    return (
        <TableColumnsRow
            gap={colGap}
            role="row"
            aria-rowindex={1}
            alignItems="center"
            className={cx("TableColumns", rowClassName, className)}
            style={{ ...rowStyle, ...style }}
        >
            {columns.map(({ title, width, alignment }, index) => (
                <TableColumnHeader
                    key={index.toString()}
                    width={width}
                    role="columnheader"
                    aria-colindex={index + 1}
                    className={cx("TableColumnHeader", rowClassName)}
                    style={rowStyle}
                >
                    <TableTitle textAlign={alignment} singleLine className="TableTitle">
                        {title}
                    </TableTitle>
                </TableColumnHeader>
            ))}
        </TableColumnsRow>
    );
}
