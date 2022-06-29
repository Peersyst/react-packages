import { AnimatedConfig, AnimatedProps } from "../Animated.types";
import { ComponentType, useRef } from "react";
import { Animated } from "react-native";
import { classify } from "@peersyst/react-utils";
import useAnimatedTiming from "../hooks/useAnimatedTiming";

export default function fade<P extends { style?: any }>(
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

    const Fade = ({
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
        style: { opacity = 1, ...style } = {},
        ...rest
    }: P & AnimatedProps): JSX.Element => {
        const [startPos, endPos] = appear ? [0, opacity] : [opacity, 0];
        const fadeAnim = useRef(new Animated.Value(inProp ? startPos : endPos)).current;

        const { mounted } = useAnimatedTiming(inProp, fadeAnim, {
            toValue: { enter: opacity, exit: 0 },
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

    return Fade;
}
