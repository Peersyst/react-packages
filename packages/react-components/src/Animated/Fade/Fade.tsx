import { forwardRef } from "react";
import { AnimatedComponentProps, TransitionStyles } from "../Animated.types";
import Animated from "../Animated";

const fade: TransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const Fade = forwardRef((props: AnimatedComponentProps, ref) => (
    <Animated animation={fade} animatedProperties="opacity" {...props} ref={ref} />
));
Fade.displayName = "Fade";

export default Fade;
