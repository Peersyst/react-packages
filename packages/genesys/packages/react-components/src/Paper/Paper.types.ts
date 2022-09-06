import { CSSProperties, HTMLAttributes } from "react";
import { CorePaperProps, Elevation } from "@peersyst/react-components-core";

export type PaperProps = HTMLAttributes<HTMLDivElement> &
    CorePaperProps & {
        /**
         * Paper className
         */
        className?: string;
        /**
         * Paper styles
         */
        style?: CSSProperties;
    };

export interface PaperStyles {
    elevation: Elevation;
    square: boolean;
}
