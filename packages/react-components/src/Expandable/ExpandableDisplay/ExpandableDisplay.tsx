import React, { useContext } from "react";
import { ExpandableContext } from "../ExpandableContext";
import { ExpandableDisplayRoot, ExpandableDropdown } from "./ExpandableDisplay.styles";
import { ExpandableDisplayProps } from "./ExpandableDisplay.types";
import { fsx } from "../../utils/fsx";
import { cx } from "../../utils/cx";

export function ExpandableDisplay({
    reverse,
    className,
    style,
    children,
    ExpandComponent = ExpandableDropdown,
}: ExpandableDisplayProps): JSX.Element {
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
