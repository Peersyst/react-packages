import { CSSProperties } from "react";

export interface ProgressBarProps {
    /**
     * Progress indicator. Must be between 0 and 100
     */
    value?: number;
    /**
     * ProgressBar className
     */
    className?: string;
    /**
     * ProgressBar style
     */
    style?: CSSProperties;
}
