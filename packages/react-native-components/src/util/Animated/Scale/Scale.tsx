import { AnimatedConfig, AnimatedProps } from "../Animated.types";
import { ComponentType, useRef } from "react";
import { Animated } from "react-native";
import { classify } from "@peersyst/react-utils";
import useAnimatedTiming from "../hooks/useAnimatedTiming";

export default function scale<P extends { style?: any }>(
    Component: ComponentType<P>,
    {
        duration: configDuration = 500,
        delay: configDelay = 0,
        easing: configEasing,
        unmountOnExit: configUnmountOnExit = false,
        onEnter: configOnEnter,
        onEntered: configOnEntered,
        onExit: configOnExit,
        onExited: configOnExited,
        appear: configAppear = false,
    }: AnimatedConfig = {},
): ComponentType<P & AnimatedProps> {
    const AnimatedComponent = Animated.createAnimatedComponent(classify(Component));

    const Scale = ({
        duration = configDuration,
        delay = configDelay,
        easing = configEasing,
        unmountOnExit = configUnmountOnExit,
        in: inProp,
        appear = configAppear,
        onEnter = configOnEnter,
        onEntered = configOnEntered,
        onExit = configOnExit,
        onExited = configOnExited,
        style,
        ...rest
    }: P & AnimatedProps): JSX.Element => {
        const [startPos, endPos] = appear ? [0, 1] : [1, 0];
        const scaleAnim = useRef(new Animated.Value(inProp ? startPos : endPos)).current;

        const { mounted } = useAnimatedTiming(inProp, scaleAnim, {
            toValue: { enter: 1, exit: 0 },
            duration,
            delay,
            easing,
            onEnter,
            onEntered,
            onExit,
            onExited,
            unmountOnExit,
        });

        if (mounted)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return <AnimatedComponent style={{ ...style, opacity: fadeAnim }} {...rest} />;
        else return <></>;
    };

    return Scale;
}
