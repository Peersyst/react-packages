import { TransitionDelay, TransitionDuration, TransitionTimingFunction } from "./Animated.types";
import { TransitionStatus } from "react-transition-group";
import { Property } from "csstype";

export function getDuration(duration: TransitionDuration, status: TransitionStatus): number {
    if (typeof duration === "number") return duration;
    else {
        if (status === "entering" || status === "entered") return duration.enter;
        else return duration.exit;
    }
}

export function getDelay(delay: TransitionDelay, status: TransitionStatus): number {
    if (typeof delay === "number") return delay;
    else {
        if (status === "entering" || status === "entered") return delay.enter;
        else return delay.exit;
    }
}

export function getTimingFunction(
    timingFunction: TransitionTimingFunction | undefined,
    status: TransitionStatus,
): Property.TransitionTimingFunction | undefined {
    if (!timingFunction) return undefined;
    if (
        typeof timingFunction === "object" &&
        "enter" in timingFunction &&
        "exit" in timingFunction
    ) {
        if (status === "entering" || status === "entered") return timingFunction.enter;
        else return timingFunction.exit;
    } else return timingFunction;
}

export function reflow(node: HTMLElement): void {
    node.scrollTop;
}
