import { Property } from "csstype";
import { CSSProperties, ReactNode } from "react";
import { ThemeColor } from "@peersyst/react-components-core";

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
     * Divider color
     */
    color?: ThemeColor;
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
