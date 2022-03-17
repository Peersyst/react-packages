import { CSSProperties, ReactElement } from "react";
import ExpandableDisplay from "./ExpandableDisplay/ExpandableDisplay";
import ExpandableBody from "./ExpandableBody/ExpandableBody";

export type ExpandableChildren = [
    ReactElement<typeof ExpandableDisplay>,
    ReactElement<typeof ExpandableBody>,
];

export interface DropdownProps {
    /**
     * Open flag
     */
    open?: boolean;
    /**
     * onOpen handler
     */
    onOpen?: () => unknown;
    /**
     * onClose handler
     */
    onClose?: () => unknown;
    /**
     * Expandable className
     */
    className?: string;
    /**
     * Expandable style
     */
    style?: CSSProperties;
    /**
     * Expandable elements
     */
    children: ExpandableChildren;
}
