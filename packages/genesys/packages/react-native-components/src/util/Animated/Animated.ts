import { Animated as BaseAnimated } from "react-native";
import { ComponentType } from "react";
import { AnimatedConfig, AnimatedProps } from "./Animated.types";
import { fade } from "./Fade";
import { slide, SlideConfig, SlideProps } from "./Slide";
import { fadingSlide } from "./FadingSlide";
import { scale } from "./Scale";
import { fadingScale } from "./FadingScale";

export type CreateAnimatedComponent = typeof BaseAnimated.createAnimatedComponent & {
    fade: <T>(
        Component: ComponentType<T>,
        config?: AnimatedConfig,
    ) => ComponentType<T & AnimatedProps>;
    scale: <T>(
        Component: ComponentType<T>,
        config?: AnimatedConfig,
    ) => ComponentType<T & AnimatedProps>;
    slide: <T>(Component: ComponentType<T>, config?: SlideConfig) => ComponentType<T & SlideProps>;
    fadingSlide: <T>(
        Component: ComponentType<T>,
        config?: SlideConfig,
    ) => ComponentType<T & SlideProps>;
    fadingScale: <T>(
        Component: ComponentType<T>,
        config?: AnimatedConfig,
    ) => ComponentType<T & AnimatedProps>;
};

const createAnimatedComponent: CreateAnimatedComponent =
    BaseAnimated.createAnimatedComponent as CreateAnimatedComponent;
// @ts-ignore
createAnimatedComponent.fade = fade;
// @ts-ignore
createAnimatedComponent.scale = scale;
// @ts-ignore
createAnimatedComponent.slide = slide;
// @ts-ignore
createAnimatedComponent.fadingSlide = fadingSlide;
// @ts-ignore
createAnimatedComponent.fadingScale = fadingScale;

const Animated = { ...BaseAnimated, createAnimatedComponent };

export default Animated;
