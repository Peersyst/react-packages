import { CSSProperties, ReactNode } from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { ExposedBackdropProps } from "../Backdrop";
import { Elevation } from "../Paper";
import { CustomAnimatedComponent } from "../Animated";

export type DrawerPosition = "left" | "right" | "top" | "bottom";

export type DrawerVariant = "permanent" | "persistent" | "temporary";

export interface DrawerProps {
    /**
     * Drawer name
     */
    name?: string;
    /**
     * Drawer variant
     */
    variant?: DrawerVariant;
    /**
     * Drawer is open on mount
     */
    defaultOpen?: boolean;
    /**
     * Controls drawer's open state
     */
    open?: boolean;
    /**
     * onClose handler
     */
    onClose?: () => unknown;
    /**
     * onExited handler
     */
    onExited?: () => unknown;
    /**
     * Position of the drawer
     */
    position?: DrawerPosition;
    /**
     * Size of the drawer
     */
    size?: {
        width?: number | string;
        height?: number | string;
        mobileWidth?: number | string;
        mobileHeight?: number | string;
    };
    /**
     * Drawer elevation
     */
    elevation?: Elevation;
    /**
     * Drawer className
     */
    className?: string;
    /**
     * Drawer style
     */
    style?: CSSProperties;
    /**
     * Custom animation
     */
    animation?: CustomAnimatedComponent;
    /**
     * Custom transition's duration
     */
    transitionsDuration?: CSSTransitionProps["timeout"];
    /**
     * Backdrop props
     */
    BackdropProps?: ExposedBackdropProps;
    /**
     * Drawer content
     */
    children: ReactNode;
}
