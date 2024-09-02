import { DrawerPosition, DrawerProps } from "../Drawer";

export interface MiniDrawerProps
    extends Omit<
        DrawerProps,
        "defaultOpen" | "open" | "onClose" | "onExited" | "transitionsDuration"
    > {
    /**
     * Controls MiniDrawers' expanded state
     */
    expanded: boolean;
    /**
     * MiniDrawer size
     */
    collapsedSize?: number | string;
    /**
     * Transition duration
     */
    transitionDuration?: string;
}

export interface MiniDrawerRootProps {
    expanded: boolean;
    collapsedSize: number | string;
    position: DrawerPosition;
    transitionDuration: string;
}
