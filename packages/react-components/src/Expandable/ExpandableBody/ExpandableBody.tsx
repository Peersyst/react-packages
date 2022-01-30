import { ExpandableConsumer } from "../ExpandableContext";
import { ExpandableFooter } from "./ExpandableFooter";
import { ExpandableHeader } from "./ExpandableHeader";
import { ExpandableContent } from "./ExpandableContent";
import { findSlot, cx } from "@peersyst/react-utils";
import { ExpandableBodyRoot } from "./ExpandableBody.styles";
import { ExpandableBodyProps } from "./ExpandableBody.types";

export default function ExpandableBody({
    className,
    style,
    children,
}: ExpandableBodyProps): JSX.Element {
    const header = findSlot<typeof ExpandableHeader>(children, ExpandableHeader);
    const content = findSlot<typeof ExpandableContent>(children, ExpandableContent);
    const footer = findSlot<typeof ExpandableFooter>(children, ExpandableFooter);

    return (
        <ExpandableConsumer>
            {({ open }) => (
                <ExpandableBodyRoot
                    className={cx("ExpandableBody", className)}
                    style={style}
                    open={open}
                >
                    {header}
                    {content}
                    {footer}
                </ExpandableBodyRoot>
            )}
        </ExpandableConsumer>
    );
}
