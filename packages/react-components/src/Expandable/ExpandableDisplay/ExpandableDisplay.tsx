import { useContext } from "react";
import { ExpandableContext } from "../ExpandableContext";
import { ExpandableDisplayRoot, ExpandableDropdown } from "./ExpandableDisplay.styles";
import { ExpandableDisplayProps } from "./ExpandableDisplay.types";
import { fsx, cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function ExpandableDisplay(props: ExpandableDisplayProps): JSX.Element {
    const {
        reverse,
        className,
        style,
        children,
        // @ts-ignore
        ExpandComponent = ExpandableDropdown,
    } = useMergeDefaultProps("ExpandableDisplay", props);

    const { toggle, open } = useContext(ExpandableContext);

    const styleProps = { open };

    return (
        <ExpandableDisplayRoot
            className={cx(className, "ExpandableDisplay", open && "Open")}
            style={fsx(style, styleProps)}
            onClick={() => toggle()}
            reverse={!!reverse}
        >
            {children}
            {ExpandComponent && <ExpandComponent open={open} />}
        </ExpandableDisplayRoot>
    );
}
