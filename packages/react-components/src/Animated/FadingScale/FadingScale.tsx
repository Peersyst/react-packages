import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import { ScaleProps } from "../Scale";
import { TransitionStyles } from "../Animated.types";
import Animated from "../Animated";

const fadingScale: TransitionStyles = {
    entering: {
        opacity: 1,
        transform: "scale(1)",
    },
    entered: {
        opacity: 1,
        transform: "scale(1)",
    },
    exiting: {
        opacity: 0,
        transform: "scale(0)",
    },
    exited: {
        opacity: 0,
        transform: "scale(0)",
    },
};

const FadingScale = forwardRef(function FadingScale(props: ScaleProps, ref) {
    const { transformOrigin, style, ...animatedProps } = useMergeDefaultProps(
        "AnimatedFadingScale",
        props,
    );

    return (
        <Animated
            animation={fadingScale}
            animatedProperties="opacity, transform"
            style={{ transformOrigin, ...style }}
            {...animatedProps}
            ref={ref}
        />
    );
});

FadingScale.displayName = "FadingScale";

export default FadingScale;
