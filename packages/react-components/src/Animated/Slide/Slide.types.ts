import { AnimatedComponentProps } from "../Animated.types";

export type SlideDirection = "up" | "right" | "down" | "left";

export interface SlideProps extends Omit<AnimatedComponentProps, "unmountOnExit" | "mountOnEnter"> {
    /**
     * Direction of the slide
     */
    direction: SlideDirection;
    /**
     * Container the Slide is transitioning from, if any
     */
    container?: null | HTMLElement;
}
