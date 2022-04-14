import { RowRoot } from "./Row.styles";
import { RowProps } from "./Row.types";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";

const Row = forwardRef(({ wrap, ...rest }: RowProps, ref): JSX.Element => {
    return <RowRoot {...rest} shouldWrap={wrap} ref={(r) => setRef(ref, r)} />;
});
Row.displayName = "Row";

export default Row;
