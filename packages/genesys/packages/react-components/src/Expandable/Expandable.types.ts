import { ComponentType, CSSProperties, ReactElement } from "react";
import ExpandableDisplay from "./ExpandableDisplay/ExpandableDisplay";
import ExpandableBody from "./ExpandableBody/ExpandableBody";
import { ExpandableDisplayProps } from "./ExpandableDisplay";
import {
    ExpandableBodyProps,
    ExpandableContentProps,
    ExpandableFooterProps,
    ExpandableHeaderProps,
} from "./ExpandableBody";

export type ExpandableChildren = [
    ReactElement<typeof ExpandableDisplay>,
    ReactElement<typeof ExpandableBody>,
];

export interface ExpandableProps {
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

export type ExpandableComponent = ComponentType<ExpandableProps> & {
    Display: ComponentType<ExpandableDisplayProps>;
    Body: ComponentType<ExpandableBodyProps>;
    Header: ComponentType<ExpandableHeaderProps>;
    Content: ComponentType<ExpandableContentProps>;
    Footer: ComponentType<ExpandableFooterProps>;
};
