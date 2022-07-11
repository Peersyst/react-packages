import { ReactElement } from "react";

export interface TabGroupArrowProps {
    /**
     * Arrow direction
     */
    direction: "left" | "right";
    /**
     * onScroll handler
     */
    onScroll: (direction: "left" | "right") => unknown;
    /**
     * TabGroup width
     */
    tabGroupWidth: number;
    /**
     * TabGroup scroll left
     */
    tabGroupScrollLeft: number;
    /**
     * TabGroup scroll width
     */
    tabGroupScrollWidth: number;
    /**
     * TabGroupArrow icon element
     */
    children: ReactElement;
}

export interface ArrowProps {
    direction: "left" | "right";
    disabled?: boolean;
}

export interface TabGroupArrowStyles {
    direction: "left" | "right";
}
