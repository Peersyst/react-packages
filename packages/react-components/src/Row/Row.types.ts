import { Property } from "csstype";
import { CSSProperties } from "react";
import * as React from "react";
import { Breakpoint } from "../styles";

export type RowBreakpointWidth = Breakpoint | number;

export interface RowBreakpoint {
    width: RowBreakpointWidth;
    gap?: number;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    reverse?: boolean;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
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
    gap?: number;
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
