import { AnimatedComponentProps } from "../Animated.types";
import { Property } from "csstype";

export interface ScaleProps extends AnimatedComponentProps {
    transformOrigin?: Property.TransformOrigin;
}
