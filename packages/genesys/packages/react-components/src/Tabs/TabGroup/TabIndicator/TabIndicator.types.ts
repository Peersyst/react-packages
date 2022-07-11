import { CSSProperties, RefObject } from "react";

export interface TabIndicatorProps {
    className?: string;
    style?: CSSProperties;
    tabGroupRef: RefObject<HTMLDivElement> | null;
}

export interface TabIndicatorStyles {
    width: number;
    position: number;
}
