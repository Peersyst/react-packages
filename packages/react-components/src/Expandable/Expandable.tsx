import React, { useState } from "react";
import { ExpandableProvider } from "./ExpandableContext";
import { ExpandableDisplay } from "./ExpandableDisplay";
import { ExpandableBody, ExpandableHeader, ExpandableContent, ExpandableFooter } from "./ExpandableBody";
import { findSlot } from "../utils/find-slot";
import { ExpandableRoot } from "./Expandable.styles";
import { DropdownProps } from "./Expandable.types";
import { cx } from "../utils/cx";

export function Expandable({ className, style, children }: DropdownProps): JSX.Element {
    const display = findSlot<typeof ExpandableDisplay>(children, ExpandableDisplay);
    const body = findSlot<typeof ExpandableBody>(children, ExpandableBody);

    const [open, setOpen] = useState<boolean>(false);

    return (
        <ExpandableRoot className={cx("Expandable", className)} style={style}>
            <ExpandableProvider
                value={{
                    open,
                    toggle: () => setOpen(!open),
                }}
            >
                {display}
                {body}
            </ExpandableProvider>
        </ExpandableRoot>
    );
}

Expandable.Display = ExpandableDisplay;
Expandable.Body = ExpandableBody;
Expandable.Header = ExpandableHeader;
Expandable.Content = ExpandableContent;
Expandable.Footer = ExpandableFooter;
