import { ReactNode } from "react";
import { PropsStyle } from "@peersyst/react-types";

export interface SelectItemStylesProps {
    selected: boolean;
}

export interface SelectItemProps {
    /**
     * Item value
     */
    value: unknown;
    /**
     * Item className
     */
    className?: string;
    /**
     * Item style
     */
    style?: PropsStyle<SelectItemStylesProps>;
    /**
     * Item content
     */
    children: ReactNode;
}

export interface SelectItemStyles {
    selected: boolean;
    readonly: boolean;
}
