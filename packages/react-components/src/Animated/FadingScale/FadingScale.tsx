import React, { forwardRef } from "react";
import { Animated, TransitionStyles } from "..";
import { ScaleProps } from "../Scale";

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

export const FadingScale = forwardRef(({ transformOrigin, style, ...animatedProps }: ScaleProps, ref) => (
    <Animated
        animation={fadingScale}
        animatedProperties="opacity, transform"
        style={{ transformOrigin, ...style }}
        {...animatedProps}
        ref={ref}
    />
));
