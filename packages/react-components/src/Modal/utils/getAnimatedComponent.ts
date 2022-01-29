import { ModalAnimation } from "../Modal.types";
import { Animated, AnimatedComponentProps, CustomAnimatedComponent } from "../../Animated";
import { SlideProps } from "../../Animated";

export function getAnimatedComponent(
    animation: ModalAnimation,
): CustomAnimatedComponent<AnimatedComponentProps> | CustomAnimatedComponent<SlideProps> {
    if (animation === "fade") return <CustomAnimatedComponent<AnimatedComponentProps>>{ AnimatedComponent: Animated.Fade };
    else if (animation === "from-bottom")
        return <CustomAnimatedComponent<SlideProps>>{
            AnimatedComponent: Animated.Slide,
            props: { direction: "up" },
        };
    else return animation;
}
