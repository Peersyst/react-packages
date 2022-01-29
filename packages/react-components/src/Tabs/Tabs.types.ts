import { CSSProperties, ReactNode } from "react";

export interface TabsProps {
    /**
     * Tabs index
     */
    index?: number;
    /**
     * OnChange handler
     */
    onIndexChange?: (index: number) => unknown;
    /**
     * Initial tab index
     */
    initialIndex?: number;
    /**
     * Tabs className
     */
    className?: string;
    /**
     * Tabs styles
     */
    style?: CSSProperties;
    /**
     * Tabs children
     */
    children?: ReactNode;
}
