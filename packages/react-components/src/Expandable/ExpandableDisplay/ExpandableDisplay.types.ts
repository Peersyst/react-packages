import { ComponentType, ReactNode } from "react";
import { PropsStyle } from "../../utils/types";

export interface ExpandableDisplayStyleProps {
    open: boolean;
}

export interface ExpandableComponentProps {
    open?: boolean;
}

export interface ExpandableDisplayProps {
    /**
     * Complementary element to show an expandable icon.
     */
    ExpandComponent?: ComponentType<ExpandableComponentProps> | false;
    /**
     * Displays the content and the expandableElement reversed.
     */
    reverse?: boolean;
    /**
     * Display className
     */
    className?: string;
    /**
     * Display style
     */
    style?: PropsStyle<ExpandableDisplayStyleProps>;
    /**
     * Display content
     */
    children?: ReactNode;
}
