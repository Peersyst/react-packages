import { AnimatedComponentProps } from "../Animated.types";

export type CollapseOrientation = "vertical" | "horizontal";

export interface CollapseProps
    extends Omit<AnimatedComponentProps, "unmountOnExit" | "mountOnEnter"> {
    /**
     * Orientation of the collapse
     */
    orientation?: CollapseOrientation;
    /**
     * Collapsed size
     */
    collapsedSize?: number | string;
}

export interface CollapseRootProps {
    orientation: CollapseOrientation;
}

export type CollapseWrapperProps = CollapseRootProps;
export type CollapseWrapperInnerProps = CollapseRootProps;
