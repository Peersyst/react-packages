import { ExpandableContentRoot } from "./ExpandableContent.styles";
import { ExpandableContentProps } from "../ExpandableBody.types";
import { cx } from "@peersyst/react-utils";

export default function ExpandableContent({
    children,
    style,
    className,
}: ExpandableContentProps): JSX.Element {
    return (
        <ExpandableContentRoot className={cx("ExpandableContent", className)} style={style}>
            {children}
        </ExpandableContentRoot>
    );
}
