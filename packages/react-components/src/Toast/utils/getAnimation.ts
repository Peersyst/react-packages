import { ToastAnimation, ToastPosition } from "../Toast.types";
import { Animated, AnimatedComponentProps, CustomAnimatedComponent } from "../../Animated";
import { SlideProps } from "../../Animated";

export function getAnimation(
    animation: ToastAnimation,
    position: ToastPosition,
): CustomAnimatedComponent {
    if (animation === "scale")
        return <CustomAnimatedComponent<AnimatedComponentProps>>{
            AnimatedComponent: Animated.FadingScale,
        };
    else if (animation === "slide") {
        const verticalAlignment = position.split("-")[0];
        if (verticalAlignment === "bottom")
            return <CustomAnimatedComponent<SlideProps>>{
                AnimatedComponent: Animated.Slide,
                props: { direction: "up" },
            };
        else
            return <CustomAnimatedComponent<SlideProps>>{
                AnimatedComponent: Animated.Slide,
                props: { direction: "down" },
            };
    } else if (animation === "fadingSlide") {
        const verticalAlignment = position.split("-")[0];
        if (verticalAlignment === "bottom")
            return <CustomAnimatedComponent<SlideProps>>{
                AnimatedComponent: Animated.FadingSlide,
                props: { direction: "up" },
            };
        else
            return <CustomAnimatedComponent<SlideProps>>{
                AnimatedComponent: Animated.FadingSlide,
                props: { direction: "down" },
            };
    }
    // fade
    else
        return <CustomAnimatedComponent<AnimatedComponentProps>>{
            AnimatedComponent: Animated.Fade,
        };
}
