import { AnimatedComponentProps } from "../Animated.types";
import { SlideDirection } from "../Slide";

export interface FadingSlideProps extends AnimatedComponentProps {
    /**
     * Direction of the slide
     */
    direction: SlideDirection;
}
