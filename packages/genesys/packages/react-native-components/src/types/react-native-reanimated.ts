import { EasingFunction, EasingFunctionFactory, ReduceMotion } from "react-native-reanimated";

export type WithTimingConfig = {
    duration?: number;
    reduceMotion?: ReduceMotion;
    easing?: EasingFunction | EasingFunctionFactory;
};
