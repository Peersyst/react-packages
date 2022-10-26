import { CSSProperties, HTMLAttributes } from "react";
import { CorePaperProps, Elevation } from "@peersyst/react-components-core";

export interface SpecificPaperProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Paper className
     */
    className?: string;
    /**
     * Paper styles
     */
    style?: CSSProperties;
}

export type PaperProps = SpecificPaperProps & CorePaperProps;

export interface PaperStyles {
    elevation: Elevation;
    square: boolean;
}
