import { CoreLabelProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";
import { Breakpoint } from "../theme";

export interface LabelBreakpoint
    extends Pick<CoreLabelProps, "placement" | "alignment" | "gap" | "singleLine"> {
    width: Breakpoint | number;
}

export interface LabelProps extends CoreLabelProps {
    /**
     * Label breakpoint
     */
    breakpoint?: LabelBreakpoint;
    /**
     * Label className
     */
    className?: string;
    /**
     * Label style
     */
    style?: CSSProperties;
}
