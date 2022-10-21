import { CoreSelectorProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";
import { LabelProps } from "../../Label";

export interface SelectorProps<T> extends CoreSelectorProps<T, LabelProps> {
    /**
     * Selector className
     */
    className?: string;
    /**
     * Selector style
     */
    style?: CSSProperties;
}
