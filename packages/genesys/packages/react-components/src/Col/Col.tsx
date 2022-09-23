import { ColRoot } from "./Col.styles";
import { ColProps } from "./Col.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";

const Col = forwardRef((props: ColProps, ref): JSX.Element => {
    const mergedProps = useMergeDefaultProps("Col", props);

    return <ColRoot {...mergedProps} ref={(r) => setRef(ref, r)} />;
});

export default Col;
