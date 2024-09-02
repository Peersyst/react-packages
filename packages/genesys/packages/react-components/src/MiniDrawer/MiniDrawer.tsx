import { MiniDrawerProps } from "./MiniDrawer.types";
import { MiniDrawerRoot } from "./MiniDrawer.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const MiniDrawer = (props: MiniDrawerProps): JSX.Element => {
    const {
        expanded,
        position = "left",
        collapsedSize = 70,
        className,
        size = { size: 300 },
        transitionDuration = "300ms",
        variant = "permanent",
        ...rest
    } = useMergeDefaultProps("MiniDrawer", props);

    return (
        <MiniDrawerRoot
            variant={variant}
            expanded={expanded}
            collapsedSize={collapsedSize}
            transitionDuration={transitionDuration}
            position={position}
            size={size}
            className={cx(className, !expanded && "Collapsed")}
            {...rest}
        />
    );
};

export default MiniDrawer;
