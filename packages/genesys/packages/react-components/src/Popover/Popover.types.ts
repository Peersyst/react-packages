import { ComponentType, CSSProperties, ReactElement, ReactNode } from "react";
import { CustomAnimatedComponent } from "../Animated";
import { Placement } from "@popperjs/core";
import { PaperProps } from "../Paper";

export type PopperPosition = Placement;

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
     * Show an arrow with the Popper
     */
    arrow?: boolean;
    /**
     * Displaces the popper along the reference element.
     */
    skidding?: number;
    /**
     * Popper animation
     */
    animation?: CustomAnimatedComponent;
    /**
     * The container will have the portal children appended to it.
     * By default, it uses the body of the top-level document object, so it's simply document.body most of the time.
     */
    container?: HTMLElement;
    /**
     * Render popper with a portal to the container or under the DOM hierarchy of the parent component.
     */
    disablePortal?: boolean;
    /**
     * Popover root className
     */
    className?: string;
    /**
     * Popover root style
     */
    style?: CSSProperties;
    /**
     * Popover elements
     */
    children: [ReactElement<PaperProps>, ReactElement];
}

export type PopoverComponent = ComponentType<PopoverProps> & {
    Popper: ComponentType<PopperProps>;
    Content: ComponentType<{ children: ReactNode }>;
};

export interface PopperProps extends Omit<PaperProps, "style"> {
    style?: CSSProperties & { arrow?: CSSProperties & { "--popper-arrow-size": string } };
}
