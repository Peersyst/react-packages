import { TableRowsProps } from "./Table.types";
import { PopoverPopperWrapper, TableBody, TableCell, TableRow, TableText } from "./Table.styles";
import { cx } from "@peersyst/react-utils";
import { Popover } from "../Popover";

export default function TableRows<T extends object>({
    rows,
    columns,
    rowClassName,
    rowStyle,
    cellClassName,
    cellStyle,
    onRowClick,
    emptyElement,
}: TableRowsProps<T>): JSX.Element {
    return (
        <TableBody>
            {rows.length === 0
                ? emptyElement
                : rows.map((row, rowIndex) => (
                      <TableRow
                          role="row"
                          key={rowIndex}
                          aria-rowindex={rowIndex + 2}
                          className={cx("TableRow", rowClassName)}
                          style={rowStyle}
                          onClick={onRowClick && (() => onRowClick(rowIndex))}
                      >
                          {columns.map(
                              ({ width, field, alignment, popover = false }, columnIndex) => (
                                  <TableCell
                                      width={width}
                                      key={columnIndex}
                                      aria-colindex={columnIndex + 1}
                                      className={cx("TableCell", cellClassName)}
                                      style={cellStyle}
                                  >
                                      {popover ? (
                                          <Popover arrow position="top">
                                              <Popover.Content>
                                                  <TableText singleLine textAlign={alignment}>
                                                      {row[field]}
                                                  </TableText>
                                              </Popover.Content>
                                              <Popover.Popper>
                                                  <PopoverPopperWrapper>
                                                      <TableText>{row[field]}</TableText>
                                                  </PopoverPopperWrapper>
                                              </Popover.Popper>
                                          </Popover>
                                      ) : (
                                          <TableText singleLine textAlign={alignment}>
                                              {row[field]}
                                          </TableText>
                                      )}
                                  </TableCell>
                              ),
                          )}
                      </TableRow>
                  ))}
        </TableBody>
    );
}
