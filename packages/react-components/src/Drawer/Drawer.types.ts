import { CSSProperties, ReactNode } from "react";
import { ExposedBackdropProps } from "../Backdrop";
import { Elevation } from "../Paper";
import { CustomAnimatedComponent, TransitionDuration } from "../Animated";

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
        size?: number | string;
        mobileSize?: number | string;
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
    transitionsDuration?: TransitionDuration;
    /**
     * Backdrop props
     */
    BackdropProps?: ExposedBackdropProps;
    /**
     * Drawer content
     */
    children: ReactNode;
}
