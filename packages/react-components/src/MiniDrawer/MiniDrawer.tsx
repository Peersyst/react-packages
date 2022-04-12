import { MiniDrawerProps } from "./MiniDrawer.types";
import { MiniDrawerRoot } from "./MiniDrawer.styles";
import { cx } from "@peersyst/react-utils";

const MiniDrawer = ({
    expanded,
    position = "left",
    collapsedSize = 70,
    className,
    size = { size: 300 },
    transitionDuration = "300ms",
    ...rest
}: MiniDrawerProps): JSX.Element => (
    <MiniDrawerRoot
        expanded={expanded}
        collapsedSize={collapsedSize}
        transitionDuration={transitionDuration}
        position={position}
        size={size}
        className={cx(className, !expanded && "Collapsed")}
        {...rest}
    />
);

export default MiniDrawer;
