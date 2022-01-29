import { CSSProperties, ReactNode } from "react";

export interface TabPanelProps {
    /**
     * Tab panel index
     */
    index: number;
    /**
     * Tab panel className
     */
    className?: string;
    /**
     * Tab panel style
     */
    style?: CSSProperties;
    /**
     * Tab panel content
     */
    children?: ReactNode;
}
