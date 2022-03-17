import { ExpandableProvider } from "./ExpandableContext";
import { ExpandableDisplay } from "./ExpandableDisplay";
import {
    ExpandableBody,
    ExpandableHeader,
    ExpandableContent,
    ExpandableFooter,
} from "./ExpandableBody";
import { findSlot, cx } from "@peersyst/react-utils";
import { ExpandableRoot } from "./Expandable.styles";
import { DropdownProps } from "./Expandable.types";
import { useControlled } from "@peersyst/react-hooks";

function Expandable({
    open: openProp,
    onOpen,
    onClose,
    className,
    style,
    children,
}: DropdownProps): JSX.Element {
    const display = findSlot<typeof ExpandableDisplay>(children, ExpandableDisplay);
    const body = findSlot<typeof ExpandableBody>(children, ExpandableBody);

    const [open, setOpen] = useControlled(false, openProp, openProp ? onClose : onOpen);

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

export default Expandable;
