import { Property } from "csstype";
import { CSSProperties, ReactNode } from "react";

export interface BaseBreakpoint {
    maxWidth: number;
    rowSize?: number | string;
    colGap?: number;
    rowGap?: number;
    alignItems?: Property.AlignItems;
    justifyItems?: Property.JustifyItems;
    justifyContent?: Property.JustifyItems;
}

export interface BaseGridProps<T extends BaseBreakpoint = any> {
    /**
     * Row size
     */
    rowSize?: number | string;
    /**
     * Column  gap
     */
    colGap?: number;
    /**
     * Row gap
     */
    rowGap?: number;
    /**
     * Grid className
     */
    className?: string;
    /**
     * Grid style
     */
    style?: CSSProperties;
    /**
     * Responsive breakpoints
     */
    breakpoints?: T[];
    /**
     * Align items property
     */
    alignItems?: Property.AlignItems;
    /**
     * Justify items property
     */
    justifyItems?: Property.JustifyItems;
    /**
     * Justify content property
     */
    justifyContent?: Property.JustifyItems;
    /**
     * Grid content
     */
    children?: ReactNode;
}

export interface BaseGridState {
    mounted: boolean;
    rowSize: number | string | undefined;
    colGap: number | undefined;
    rowGap: number | undefined;
    activeBreakpoint: number | undefined;
    alignItems: Property.AlignItems | undefined;
    justifyItems: Property.JustifyItems | undefined;
    justifyContent: Property.AlignItems | undefined;
}
