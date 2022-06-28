import { ToastContainerStylesProps } from "../Toast.types";
import { ToastAnimation } from "@peersyst/react-components-core";
import { ComponentType } from "react";
import { Animated, AnimatedProps } from "../../../util/Animated";
import { SlideProps } from "../../../util/Animated/Slide";
import { ToastContainer } from "../Toast.styles";

const FadingToast = Animated.createAnimatedComponent.fade(ToastContainer);
const ScalingToast = Animated.createAnimatedComponent.scale(ToastContainer);
const SlidingToast = Animated.createAnimatedComponent.slide(ToastContainer);
const FadingSlideToast = Animated.createAnimatedComponent.fadingSlide(ToastContainer);

export default function getAnimatedComponent(
    animation: ToastAnimation,
): ComponentType<(AnimatedProps | SlideProps) & ToastContainerStylesProps> {
    switch (animation) {
        case "fade":
            return FadingToast;
        case "scale":
            return ScalingToast;
        case "slide":
            return SlidingToast;
        case "fadingSlide":
            return FadingSlideToast;
    }
}
