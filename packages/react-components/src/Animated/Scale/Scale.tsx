import { forwardRef } from "react";
import { Animated, TransitionStyles } from "..";
import { ScaleProps } from "./Scale.types";

const scale: TransitionStyles = {
    entering: {
        transform: "scale(1)",
    },
    entered: {
        transform: "scale(1)",
    },
    exiting: {
        transform: "scale(0)",
    },
    exited: {
        transform: "scale(0)",
    },
};

const Scale = forwardRef(({ transformOrigin, style, ...animatedProps }: ScaleProps, ref) => (
    <Animated
        animation={scale}
        animatedProperties="transform"
        style={{ transformOrigin, ...style }}
        {...animatedProps}
        ref={ref}
    />
));

Scale.displayName = "Scale";

export default Scale;
