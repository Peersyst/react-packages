import { RefObject } from "react";

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
     * Element that consumes observer state
     */
    children: (onScreen: boolean) => any;
}

export interface OnScreenObserverWrapperProps {
    offset: string;
}
