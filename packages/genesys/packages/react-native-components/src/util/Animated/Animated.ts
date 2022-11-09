import { Animated as BaseAnimated } from "react-native";
import { ComponentType } from "react";
import { AnimatedComponentProps, AnimatedConfig, AnimatedProps } from "./Animated.types";
import { fade } from "./Fade";
import { slide, SlideConfig, SlideProps } from "./Slide";
import { fadingSlide } from "./FadingSlide";
import { scale } from "./Scale";
import { fadingScale } from "./FadingScale";

export type CreateAnimatedComponent = typeof BaseAnimated.createAnimatedComponent & {
    fade: <T extends AnimatedComponentProps>(
        Component: ComponentType<T>,
        config?: AnimatedConfig,
    ) => ComponentType<T & AnimatedProps>;
    scale: <T extends AnimatedComponentProps>(
        Component: ComponentType<T>,
        config?: AnimatedConfig,
    ) => ComponentType<T & AnimatedProps>;
    slide: <T extends AnimatedComponentProps>(
        Component: ComponentType<T>,
        config?: SlideConfig,
    ) => ComponentType<T & SlideProps>;
    fadingSlide: <T extends AnimatedComponentProps>(
        Component: ComponentType<T>,
        config?: SlideConfig,
    ) => ComponentType<T & SlideProps>;
    fadingScale: <T extends AnimatedComponentProps>(
        Component: ComponentType<T>,
        config?: AnimatedConfig,
    ) => ComponentType<T & AnimatedProps>;
};

const createAnimatedComponent: CreateAnimatedComponent =
    BaseAnimated.createAnimatedComponent as CreateAnimatedComponent;

createAnimatedComponent.fade = fade;
createAnimatedComponent.scale = scale;
createAnimatedComponent.slide = slide;
createAnimatedComponent.fadingSlide = fadingSlide;
createAnimatedComponent.fadingScale = fadingScale;

const Animated = { ...BaseAnimated, createAnimatedComponent };

export default Animated;
