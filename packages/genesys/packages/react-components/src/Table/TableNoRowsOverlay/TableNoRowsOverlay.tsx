import clsx from "clsx";
import { TableOverlay } from "../TableOverlay";
import { TableNoRowsProps } from "./TableNoRowsOverlay.types";
import { Typography } from "../../Typography";

const TableNoRowsOverlay = ({
    noRowsElement,
    className,
    ...rest
}: TableNoRowsProps): JSX.Element => {
    return (
        <TableOverlay className={clsx("TableNoRowsOverlay", className)} {...rest}>
            {noRowsElement || (
                <Typography variant="body1" light>
                    No rows
                </Typography>
            )}
        </TableOverlay>
    );
};

export default TableNoRowsOverlay;
