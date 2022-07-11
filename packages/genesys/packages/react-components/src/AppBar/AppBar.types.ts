import { CSSProperties, ReactNode } from "react";
import { PaperProps } from "../Paper";
import { Property } from "csstype";

export interface AppBarProps {
    /**
     * AppBar position
     */
    position?: Property.Position;
    /**
     * AppBar elevation
     */
    elevation?: PaperProps["elevation"];
    /**
     * Elevate AppBar on scroll
     */
    onScrollElevation?: PaperProps["elevation"];
    /**
     * onScroll elevation threshold
     */
    onScrollElevationThreshold?: number;
    /**
     * Hide AppBar on scroll
     */
    hideOnScroll?: boolean;
    /**
     * Hide on scroll threshold
     */
    hideOnScrollThreshold?: number;
    /**
     * AppBar className
     */
    className?: string;
    /**
     * AppBar style
     */
    style?: CSSProperties;
    /**
     * AppBar content
     */
    children: ReactNode;
}

export interface AppBarStylesProps {
    position: Property.Position;
}
