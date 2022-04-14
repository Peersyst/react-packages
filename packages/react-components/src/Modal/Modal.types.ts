import { CSSProperties, ReactNode } from "react";
import { ExposedBackdropProps } from "../Backdrop";
import { Elevation } from "../Paper";
import { CustomAnimatedComponent, TransitionDuration } from "../Animated";

export type ModalAnimation = "fade" | "from-bottom" | CustomAnimatedComponent;

export interface ModalProps {
    /**
     * Modal name
     */
    name?: string;
    /**
     * Modal is open on mount
     */
    defaultOpen?: boolean;
    /**
     * Modal's open state
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
     * Modal is closable
     */
    closable?: boolean;
    /**
     * Modal elevation
     */
    elevation?: Elevation;
    /**
     * Prevent scroll when Modal is open
     */
    preventScroll?: boolean;
    /**
     * Modal className
     */
    className?: string;
    /**
     * Modal style
     */
    style?: CSSProperties;
    /**
     * Modal animation
     */
    animation?: ModalAnimation;
    /**
     * Custom transition's duration
     */
    transitionsDuration?: TransitionDuration;
    /**
     * Render at ModalProvider
     */
    renderAtRoot?: boolean;
    /**
     * If backdrop should be rendered
     */
    renderBackdrop?: boolean;
    /**
     * Backdrop props
     */
    BackdropProps?: ExposedBackdropProps;
    /**
     * Modal content
     */
    children?: ReactNode;
}
