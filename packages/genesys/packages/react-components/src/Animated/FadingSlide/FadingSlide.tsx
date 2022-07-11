import { forwardRef } from "react";
import { FadingSlideProps } from "./FadingSlide.types";
import { SlideDirection } from "../Slide";
import { TransitionStyles } from "../Animated.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import Animated from "../Animated";

const getFadingSlide = (direction: SlideDirection): TransitionStyles => {
    let translate;

    if (direction === "up") translate = "translateY(20px)";
    else if (direction === "down") translate = "translateY(-20px)";
    else if (direction === "left") translate = "translateX(20px)";
    else translate = "translateX(-20px)";

    return {
        entering: {
            transform: "translateY(0) translateX(0)",
            opacity: 1,
        },
        entered: {
            transform: "translateY(0) translateX(0)",
            opacity: 1,
        },
        exiting: {
            transform: translate,
            opacity: 0,
        },
        exited: {
            transform: translate,
            opacity: 0,
        },
    };
};

const FadingSlide = forwardRef((props: FadingSlideProps, ref) => {
    const { direction, ...animatedProps } = useMergeDefaultProps("AnimatedFadingSlide", props);

    return (
        <Animated
            animation={getFadingSlide(direction)}
            animatedProperties="transform, opacity"
            {...animatedProps}
            ref={ref}
        />
    );
});

FadingSlide.displayName = "FadingSlide";

export default FadingSlide;
