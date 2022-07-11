import { ExpandableConsumer } from "../ExpandableContext";
import { ExpandableFooter } from "./ExpandableFooter";
import { ExpandableHeader } from "./ExpandableHeader";
import { ExpandableContent } from "./ExpandableContent";
import { findSlot, cx } from "@peersyst/react-utils";
import { ExpandableBodyRoot } from "./ExpandableBody.styles";
import { ExpandableBodyProps } from "./ExpandableBody.types";
import { Animated } from "../../Animated";

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
                <Animated.Collapse in={open}>
                    <ExpandableBodyRoot className={cx("ExpandableBody", className)} style={style}>
                        {header}
                        {content}
                        {footer}
                    </ExpandableBodyRoot>
                </Animated.Collapse>
            )}
        </ExpandableConsumer>
    );
}
