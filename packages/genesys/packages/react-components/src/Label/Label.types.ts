import { CoreLabelProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";
import { Breakpoint } from "../theme";

export interface LabelBreakpoint extends Pick<CoreLabelProps, "placement" | "alignment" | "gap"> {
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
    /**
     * Text doesn't wrap and shows ellipsis if overflowed
     */
    singleLine?: boolean;
}
