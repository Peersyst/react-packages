import { AnimatedConfig, AnimatedProps } from "../Animated.types";

export type SlideDirection = "up" | "right" | "down" | "left";

export interface SlideConfig extends AnimatedConfig {
    direction?: SlideDirection;
}

export interface SlideProps extends AnimatedProps {
    direction?: SlideDirection;
}
