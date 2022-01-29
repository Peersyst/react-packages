import { CSSProperties, ReactElement } from "react";
import { CustomAnimatedComponent, TransitionDuration, TransitionStyles } from "../Animated";

export interface BackdropProps {
    /**
     * Backdrop name
     */
    name?: string;
    /**
     * Backdrop is open
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
     * Backdrop is open on mount
     */
    defaultOpen?: boolean;
    /**
     * Backdrop is closable
     */
    closable?: boolean;
    /**
     * Prevent scroll when Backdrop is open
     */
    preventScroll?: boolean;
    /**
     * Backdrop is transparent
     */
    transparent?: boolean;
    /**
     * Backdrop style
     */
    className?: string;
    /**
     * Backdrop style
     */
    style?: CSSProperties;
    /**
     * Custom Backdrop animation
     */
    animation?: TransitionStyles;
    /**
     * Children animation
     */
    childrenAnimation?: CustomAnimatedComponent;
    /**
     * Custom transition's duration
     */
    transitionsDuration?: TransitionDuration;
    /**
     * Backdrop content
     */
    children?: ReactElement;
}

export interface BackdropStyles {
    transparent: boolean;
}

export type ForwardedBackdropProps = Pick<
    BackdropProps,
    "name" | "defaultOpen" | "open" | "onClose" | "onExited" | "closable" | "preventScroll" | "childrenAnimation"
>;

export type ExposedBackdropProps = Pick<BackdropProps, "className" | "style" | "animation" | "transitionsDuration" | "transparent">;
