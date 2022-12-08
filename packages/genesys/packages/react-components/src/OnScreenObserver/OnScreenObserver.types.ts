import { ReactNode, RefObject } from "react";

export interface OnScreenObserverProps {
    /**
     * Container to observe, if not provided it observes screen
     */
    container?: RefObject<HTMLElement | null>;
    /**
     * Observer offset. onScreen will be triggered -offset px before.
     */
    offset?: string;
    /**
     * onScreen handler
     */
    onScreen?: (onScreen: boolean) => any;
    /**
     * Element that consumes observer state
     */
    children: ((onScreen: boolean) => ReactNode) | ReactNode;
}

export interface OnScreenObserverWrapperProps {
    offset: string;
}
