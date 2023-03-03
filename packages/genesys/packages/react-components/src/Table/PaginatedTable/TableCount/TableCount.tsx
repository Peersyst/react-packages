import clsx from "clsx";
import { Typography } from "../../../Typography";
import { TableCountProps } from "./TableCount.types";

const TableCount = ({ range, total, className, style }: TableCountProps): JSX.Element => {
    return (
        <Typography className={clsx("TableCount", className)} variant="body2" style={style}>
            {range[0]} - {range[1]} of {total}
        </Typography>
    );
};

export default TableCount;
