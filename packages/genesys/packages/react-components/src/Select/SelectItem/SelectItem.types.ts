import { CoreSelectItemProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

export interface SelectItemProps<T> extends CoreSelectItemProps<T> {
    /**
     * Item className
     */
    className?: string;
    /**
     * Item style
     */
    style?: CSSProperties;
}

export interface SelectItemStyles {
    selected: boolean;
    readonly: boolean;
}
