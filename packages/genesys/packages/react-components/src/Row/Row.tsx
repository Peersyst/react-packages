import { RowRoot } from "./Row.styles";
import { RowProps } from "./Row.types";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Row = forwardRef((props: RowProps, ref): JSX.Element => {
    const { wrap, ...rest } = useMergeDefaultProps("Row", props);

    return <RowRoot {...rest} shouldWrap={wrap} ref={(r) => setRef(ref, r)} />;
});
Row.displayName = "Row";

export default Row;
