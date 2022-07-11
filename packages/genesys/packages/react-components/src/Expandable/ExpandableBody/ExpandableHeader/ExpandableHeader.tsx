import { ExpandableHeaderRoot } from "./ExpandableHeader.styles";
import { ExpandableHeaderProps } from "../ExpandableBody.types";
import { cx } from "@peersyst/react-utils";

export default function ExpandableHeader({
    children,
    className,
    style,
}: ExpandableHeaderProps): JSX.Element {
    return (
        <ExpandableHeaderRoot className={cx("ExpandableHeader", className)} style={style}>
            {children}
        </ExpandableHeaderRoot>
    );
}
