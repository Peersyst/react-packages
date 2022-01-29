import React from "react";
import { ExpandableHeaderRoot } from "./ExpandableHeader.styles";
import { ExpandableHeaderProps } from "../ExpandableBody.types";
import { cx } from "../../../utils/cx";

export function ExpandableHeader({ children, className, style }: ExpandableHeaderProps): JSX.Element {
    return (
        <ExpandableHeaderRoot className={cx("ExpandableHeader", className)} style={style}>
            {children}
        </ExpandableHeaderRoot>
    );
}
