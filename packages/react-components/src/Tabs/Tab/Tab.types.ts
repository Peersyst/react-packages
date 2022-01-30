import { ReactNode } from "react";
import { PropsStyle } from "@peersyst/react-types";

export interface TabProps {
    /**
     * Tab index
     */
    index: number;
    /**
     * Tab className
     */
    className?: string;
    /**
     * Tab style
     */
    style?: PropsStyle<TabStyleProps>;
    /**
     * Tab content
     */
    children: ReactNode;
}

export interface TabStyleProps {
    active: boolean;
}
