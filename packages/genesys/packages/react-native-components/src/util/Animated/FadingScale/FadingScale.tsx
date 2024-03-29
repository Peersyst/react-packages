import { ComponentType, useRef } from "react";
import { Animated } from "react-native";
import { classify } from "@peersyst/react-utils";
import useAnimatedTiming from "../hooks/useAnimatedTiming";
import { SlideProps } from "../Slide";
import { AnimatedProps, AnimatedConfig } from "../Animated.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function fadingScale<P extends { style?: any }>(
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

    const FadingScale = (props: P & SlideProps): JSX.Element => {
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
            style: { opacity = 1, ...style } = {},
            ...rest
        } = useMergeDefaultProps("AnimatedFadingScale", props);

        const [startPos, endPos] = appear ? [0, opacity] : [opacity, 0];
        const fadingScaleAnim = useRef(new Animated.Value(inProp ? startPos : endPos)).current;

        const { mounted } = useAnimatedTiming(inProp, fadingScaleAnim, {
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

        return mounted ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <AnimatedComponent
                style={{
                    ...style,
                    opacity: fadingScaleAnim,
                    transform: [{ scale: fadingScaleAnim }],
                }}
                {...rest}
            />
        ) : (
            <></>
        );
    };

    return FadingScale;
}
