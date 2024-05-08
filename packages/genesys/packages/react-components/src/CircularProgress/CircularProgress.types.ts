import { ThemeColor } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

export interface CircularProgressProps {
    /**
     * Progress indicator. Must be between 0 and 100
     */
    value?: number;
    /**
     * CircularProgress className
     */
    className?: string;
    /**
     * CircularProgress style
     */
    style?: CSSProperties;
    /**
     * CircularProgress color
     */
    color?: ThemeColor;
    /**
     * CircularProgress size
     */
    size?: number;
    /**
     * CircularProgress thickness
     */
    thickness?: number;
}
