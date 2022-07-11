import { ExpandableFooterRoot } from "./ExpandableFooter.styles";
import { ExpandableFooterProps } from "../ExpandableBody.types";
import { cx } from "@peersyst/react-utils";

export default function ExpandableFooter({
    children,
    className,
    style,
}: ExpandableFooterProps): JSX.Element {
    return (
        <ExpandableFooterRoot className={cx("ExpandableFooter", className)} style={style}>
            {children}
        </ExpandableFooterRoot>
    );
}
