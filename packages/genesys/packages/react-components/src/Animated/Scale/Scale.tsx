import { forwardRef } from "react";
import { ScaleProps } from "./Scale.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import Animated from "../Animated";
import { TransitionStyles } from "../Animated.types";

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

const Scale = forwardRef((props: ScaleProps, ref) => {
    const { transformOrigin, style, ...animatedProps } = useMergeDefaultProps(
        "AnimatedScale",
        props,
    );

    return (
        <Animated
            animation={scale}
            animatedProperties="transform"
            style={{ transformOrigin, ...style }}
            {...animatedProps}
            ref={ref}
        />
    );
});

Scale.displayName = "Scale";

export default Scale;
