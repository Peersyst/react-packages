import React from "react";
import { ExpandableContentRoot } from "./ExpandableContent.styles";
import { ExpandableContentProps } from "../ExpandableBody.types";
import { cx } from "../../../utils/cx";

export function ExpandableContent({ children, style, className }: ExpandableContentProps): JSX.Element {
    return (
        <ExpandableContentRoot className={cx("ExpandableContent", className)} style={style}>
            {children}
        </ExpandableContentRoot>
    );
}
