import { ReactElement } from "react";
import { Popover } from "./Popover";
import { CustomAnimatedComponent } from "../Animated";

export type PopperPosition = "top" | "right" | "bottom" | "left" | "top-right" | "top-left" | "bottom-right" | "bottom-left";

export type ShowOn = "click" | "hover";

export interface PopoverProps {
    /**
     * Show popover on click or hover
     */
    showOn?: ShowOn;
    /**
     * Popover position
     */
    position?: PopperPosition;
    /**
     * Control popover visibility
     */
    visible?: boolean;
    /**
     * onShow handler
     */
    onShow?: () => unknown;
    /**
     * onHide handler
     */
    onHide?: () => unknown;
    /**
     * Popper animation
     */
    animation?: CustomAnimatedComponent;
    /**
     * Popover elements
     */
    children: [ReactElement<typeof Popover.Popper>, ReactElement<typeof Popover.Content>];
}

export interface PopperStyles {
    position: PopperPosition;
    origin: PopperOrigin;
}

export interface PopperOrigin {
    vertical: number;
    horizontal: number;
}
