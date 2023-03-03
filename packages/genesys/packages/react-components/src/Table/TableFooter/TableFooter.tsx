import { TableFooterProps } from "./TableFooter.types";
import { TableFooterRoot } from "./TableFooter.styles";
import clsx from "clsx";

function TableFooter({ children, className, style }: TableFooterProps): JSX.Element {
    return (
        <TableFooterRoot className={clsx("TableFooter", className)} style={style}>
            {children}
        </TableFooterRoot>
    );
}

export default TableFooter;
