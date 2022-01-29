import React, { forwardRef } from "react";
import { Animated, TransitionStyles } from "..";
import { FadingSlideProps } from "./FadingSlide.types";
import { SlideDirection } from "../Slide";

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

export const FadingSlide = forwardRef(({ direction, ...animatedProps }: FadingSlideProps, ref) => (
    <Animated animation={getFadingSlide(direction)} animatedProperties="transform, opacity" {...animatedProps} ref={ref} />
));
