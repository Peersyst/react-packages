import { CSSProperties, ReactNode } from "react";

export type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

export interface PaperProps {
    /**
     * Paper elevation
     */
    elevation?: Elevation;
    /**
     * Paper has squared corners
     */
    square?: boolean;
    /**
     * Paper className
     */
    className?: string;
    /**
     * Paper styles
     */
    style?: CSSProperties;
    /**
     * Paper content
     */
    children?: ReactNode;
}

export interface PaperStyles {
    elevation: Elevation;
    square: boolean;
}
