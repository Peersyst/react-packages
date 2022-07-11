import { DrawerPosition, DrawerProps } from "../Drawer";

export interface MiniDrawerProps
    extends Pick<DrawerProps, "size" | "className" | "style" | "children" | "position"> {
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
