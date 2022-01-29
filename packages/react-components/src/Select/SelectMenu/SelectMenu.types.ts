import { CSSProperties, ReactElement } from "react";
import { SelectItem } from "../SelectItem";

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
    children: ReactElement<typeof SelectItem> | ReactElement<typeof SelectItem>[] | undefined;
}
