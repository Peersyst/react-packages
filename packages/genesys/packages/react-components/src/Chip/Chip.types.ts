import { CoreChipProps } from "@peersyst/react-components-core";
import { CSSProperties, MouseEvent, ReactElement } from "react";

export interface ChipProps extends CoreChipProps {
    /**
     * Whether Chip appears as clickable, does not affect onClick
     */
    clickable?: boolean;
    /**
     * onClick handler
     */
    onClick?: (e: MouseEvent) => any;
    /**
     * onDelete handler, renders a delete icon
     */
    onDelete?: (e: MouseEvent) => any;
    /**
     * Custom delete icon
     */
    deleteIcon?: ReactElement;
    /**
     * Chip className
     */
    className?: string;
    /**
     * Chip style
     */
    style?: CSSProperties;
}
