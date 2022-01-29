import { CSSProperties, ReactElement } from "react";
import { Tab } from "../Tab";

export interface TabGroupProps {
    /**
     * Left arrow element to scroll tabs on desktop
     */
    leftArrowIcon?: ReactElement;
    /**
     * Right arrow element to scroll tabs on desktop
     */
    rightArrowIcon?: ReactElement;
    /**
     * Render indicator
     */
    renderIndicator?: boolean;
    /**
     * Indicator className
     */
    indicatorClassName?: string;
    /**
     * Indicator style
     */
    indicatorStyle?: CSSProperties;
    /**
     * TabGroup className
     */
    className?: string;
    /**
     * TabGroup style
     */
    style?: CSSProperties;
    /**
     * TabGroup tabs
     */
    children: ReactElement<typeof Tab> | ReactElement<typeof Tab>[];
}
