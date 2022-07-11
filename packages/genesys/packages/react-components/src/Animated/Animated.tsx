import { cloneElement, forwardRef } from "react";
import { getDelay, getDuration, getTimingFunction, reflow } from "./helpers";
import { AnimatedComponent, AnimatedProps } from "./Animated.types";
import { Transition, TransitionStatus } from "react-transition-group";
import { Fade } from "./Fade";
import { Slide } from "./Slide";
import { FadingSlide } from "./FadingSlide";
import { Scale } from "./Scale";
import { FadingScale } from "./FadingScale";
import { Collapse } from "./Collapse";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Animated = forwardRef(function Animated(props: AnimatedProps, ref) {
    const {
        appear = true,
        children,
        in: inProp = true,
        animatedProperties,
        hideOnExit = true,
        timingFunction,
        animation = {},
        duration = 500,
        delay = 0,
        mountOnEnter = false,
        unmountOnExit = false,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        addEndListener,
        style,
    } = useMergeDefaultProps("Animated", props);

    const handleOnEnter = (node: HTMLElement, isAppearing: boolean) => {
        // Make sure exited and entering don't happen at the same time when mountOnEnter = true
        reflow(node);
        onEnter?.(node, isAppearing);
    };

    return (
        <Transition
            in={inProp}
            timeout={duration}
            appear={appear}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            onEnter={handleOnEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
            addEndListener={addEndListener}
        >
            {(status: Exclude<TransitionStatus, "unmounted">) => {
                return cloneElement(children, {
                    ...children.props,
                    ref,
                    style: {
                        ...children.props.style,
                        transition: "unset",
                        visibility:
                            hideOnExit && status === "exited" && !inProp ? "hidden" : undefined,
                        ...animation[status],
                        transitionTimingFunction: getTimingFunction(timingFunction, status),
                        transitionDuration: getDuration(duration, status) + "ms",
                        transitionDelay: getDelay(delay, status) + "ms",
                        transitionProperty: animatedProperties,
                        ...style,
                    },
                });
            }}
        </Transition>
    );
}) as AnimatedComponent;

Animated.Collapse = Collapse;
Animated.Fade = Fade;
Animated.Slide = Slide;
Animated.FadingSlide = FadingSlide;
Animated.Scale = Scale;
Animated.FadingScale = FadingScale;

export default Animated;
