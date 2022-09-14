import { AnimatedConfig, AnimatedProps } from "../Animated.types";
import { ComponentType, useRef } from "react";
import { Animated } from "react-native";
import { classify } from "@peersyst/react-utils";
import useAnimatedTiming from "../hooks/useAnimatedTiming";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

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

    const Scale = (props: P & AnimatedProps): JSX.Element => {
        const {
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
        } = useMergeDefaultProps("AnimatedScale", props);

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
            return (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <AnimatedComponent
                    style={{ ...style, transform: [{ scale: scaleAnim }] }}
                    {...rest}
                />
            );
        else return <></>;
    };

    return Scale;
}
