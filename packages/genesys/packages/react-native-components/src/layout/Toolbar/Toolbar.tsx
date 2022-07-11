import { ToolbarRoot } from "./Toolbar.styles";
import { ToolbarProps } from "./Toolbar.types";
import { useToolbarHeight } from "../../config/hook";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Toolbar = (props: ToolbarProps): JSX.Element => {
    const mergedProps = useMergeDefaultProps("Toolbar", props);

    const height = useToolbarHeight();

    return <ToolbarRoot height={height} {...mergedProps} />;
};

export default Toolbar;
