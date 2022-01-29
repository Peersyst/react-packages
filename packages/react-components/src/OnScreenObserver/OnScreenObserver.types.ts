export interface OnScreenObserverProps {
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
