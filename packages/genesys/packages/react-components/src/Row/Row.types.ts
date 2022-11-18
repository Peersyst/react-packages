import { Property } from "csstype";
import { CSSProperties, HTMLAttributes } from "react";
import { Breakpoint } from "../theme";

export type RowBreakpointWidth = Breakpoint | number;

export interface RowBreakpoint {
    width: RowBreakpointWidth;
    gap?: number | string;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    reverse?: boolean;
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Flex factor
     */
    flex?: Property.Flex;
    /**
     * Reverse direction
     */
    reverse?: boolean;
    /**
     * Align items css property
     */
    alignItems?: Property.AlignItems;
    /**
     * Justify content css property
     */
    justifyContent?: Property.JustifyContent;
    /**
     * Column gap
     */
    gap?: number | string;
    /**
     * Wrap row gap
     */
    wrapGap?: number | string;
    /**
     * Row should wrap content
     */
    wrap?: boolean;
    /**
     * Breakpoint: required a width, and optional justifyContent, alignItems and gap
     */
    breakpoint?: RowBreakpoint;
    /**
     * Row className
     */
    className?: string;
    /**
     * Row style
     */
    style?: CSSProperties;
}

export type RowRootProps = Omit<NonNullable<RowProps>, "style" | "className" | "wrap"> & {
    shouldWrap?: boolean;
};
