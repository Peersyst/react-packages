import { Property } from "csstype";
import { CSSProperties, ReactNode } from "react";

export interface DividerProps {
    /**
     * Thickness of the divider
     */
    size?: Property.Height;
    /**
     * Width of the divider
     */
    width?: "sm" | "md" | "lg" | "full-width";
    /**
     * Color of the divider
     */
    color?: Property.Color;
    /**
     * Divider className
     */
    className?: string;
    /**
     * Divider style
     */
    style?: CSSProperties;
    /**
     * Content that will go between two dividers
     */
    children?: ReactNode;
}
