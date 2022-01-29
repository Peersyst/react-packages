import { CSSProperties, ForwardRefExoticComponent, JSXElementConstructor, ReactElement, RefAttributes } from "react";
import { TransitionStatus } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";
import { Property } from "csstype";
import { Fade } from "./Fade";
import { Slide } from "./Slide";
import { FadingSlide } from "./FadingSlide";
import { Scale } from "./Scale";
import { FadingScale } from "./FadingScale";

export interface AnimatedComponentProps {
    /**
     * Apply animation on mount
     */
    appear?: boolean;
    /**
     * Transition timing function e.g. "ease-in"
     */
    timingFunction?: TransitionTimingFunction;
    /**
     * If content is animated in
     */
    in?: boolean;
    /**
     * Hide on exit
     */
    hideOnExit?: boolean;
    /**
     * Duration for all stages or duration for every stage in ms.
     */
    duration?: TransitionDuration;
    /**
     * Delay for all stages or duration for every stage in ms.
     */
    delay?: TransitionDelay;
    /**
     * By default the child component is mounted immediately along with the parent Transition component. If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.
     */
    mountOnEnter?: boolean;
    /**
     * By default the child component stays mounted after it reaches the 'exited' state. Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit?: boolean;
    /**
     * onEnter handler
     */
    onEnter?: TransitionProps["onEnter"];
    /**
     * onEntering handler
     */
    onEntering?: TransitionProps["onEntering"];
    /**
     * onEntered handler
     */
    onEntered?: TransitionProps["onEntered"];
    /**
     * onExit handler
     */
    onExit?: TransitionProps["onExit"];
    /**
     * onExiting handler
     */
    onExiting?: TransitionProps["onExiting"];
    /**
     * onExited handler
     */
    onExited?: TransitionProps["onExited"];
    /**
     * Add a custom transition end trigger
     */
    addEndListener?: TransitionProps["addEndListener"];
    /**
     * Animated style
     */
    style?: CSSProperties;
    /**
     * Content to be animated
     */
    children: ReactElement;
}

export interface AnimatedProps extends AnimatedComponentProps {
    /**
     * Animation styles for each stage
     */
    animation: TransitionStyles;
    /**
     * CSS properties to be animated
     */
    animatedProperties: Property.TransitionProperty;
}

export type TransitionDuration = number | { enter: number; exit: number };

export type TransitionDelay = number | { enter: number; exit: number };

export type TransitionStyles = Partial<Record<Exclude<TransitionStatus, "unmounted">, CSSProperties | undefined>>;

export type TransitionTimingFunction =
    | Property.TransitionTimingFunction
    | { enter: Property.TransitionTimingFunction; exit: Property.TransitionTimingFunction };

export type AnimatedComponent = ForwardRefExoticComponent<AnimatedProps & RefAttributes<unknown>> & {
    Fade: typeof Fade;
    Slide: typeof Slide;
    FadingSlide: typeof FadingSlide;
    Scale: typeof Scale;
    FadingScale: typeof FadingScale;
};

export type CustomAnimatedComponent<T = any> = {
    AnimatedComponent: JSXElementConstructor<T>;
    props?: Omit<T, "in" | "children">;
};
