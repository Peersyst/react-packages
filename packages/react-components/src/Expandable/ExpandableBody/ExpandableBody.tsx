import { ExpandableConsumer } from "../ExpandableContext";
import { ExpandableFooter } from "./ExpandableFooter";
import { ExpandableHeader } from "./ExpandableHeader";
import { ExpandableContent } from "./ExpandableContent";
import { findSlot } from "../../utils/find-slot";
import { ExpandableBodyRoot } from "./ExpandableBody.styles";
import { ExpandableBodyProps } from "./ExpandableBody.types";
import { cx } from "../../utils/cx";

export function ExpandableBody({ className, style, children }: ExpandableBodyProps): JSX.Element {
    const header = findSlot<typeof ExpandableHeader>(children, ExpandableHeader);
    const content = findSlot<typeof ExpandableContent>(children, ExpandableContent);
    const footer = findSlot<typeof ExpandableFooter>(children, ExpandableFooter);

    return (
        <ExpandableConsumer>
            {({ open }) => (
                <ExpandableBodyRoot className={cx("ExpandableBody", className)} style={style} open={open}>
                    {header}
                    {content}
                    {footer}
                </ExpandableBodyRoot>
            )}
        </ExpandableConsumer>
    );
}
