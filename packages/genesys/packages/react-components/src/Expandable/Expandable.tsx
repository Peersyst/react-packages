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
import { ExpandableComponent, ExpandableProps } from "./Expandable.types";
import { useControlled } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Expandable = ((props: ExpandableProps): JSX.Element => {
    const {
        open: openProp,
        onOpen,
        onClose,
        className,
        style,
        children,
    } = useMergeDefaultProps("Expandable", props);

    const display = findSlot<typeof ExpandableDisplay>(children, ExpandableDisplay);
    const body = findSlot<typeof ExpandableBody>(children, ExpandableBody);

    const [open, setOpen] = useControlled(false, openProp, openProp ? onClose : onOpen);

    return (
        <ExpandableRoot className={cx("Expandable", className, open && "Open")} style={style}>
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
}) as ExpandableComponent;

Expandable.Display = ExpandableDisplay;
Expandable.Body = ExpandableBody;
Expandable.Header = ExpandableHeader;
Expandable.Content = ExpandableContent;
Expandable.Footer = ExpandableFooter;

export default Expandable;
