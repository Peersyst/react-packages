import { CSSProperties, ReactNode } from "react";

export interface SelectMenuProps {
    /**
     * Menu is open
     */
    open: boolean;
    /**
     * Menu is expandable instead of absolutely positioned
     */
    expandable: boolean;
    /**
     * Menu className
     */
    className?: string;
    /**
     * Menu style
     */
    style?: CSSProperties;
    /**
     * Menu options and mask
     */
    children: ReactNode;
}
