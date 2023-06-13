import { ForwardedRef, RefAttributes, forwardRef, useEffect } from "react";
import { CircularProgressProps } from "./CircularProgress.types";
import Animated, {
    Easing,
    WithTimingConfig,
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { Circle, CircleProps } from "react-native-svg";
import {
    CircularProgressContent,
    CircularProgressRoot,
    CircularProgressSvg,
} from "./CircularProgress.styles";
import { useCircularProgress, useCircularProgressShape, useCircularProgressStyles } from "./hooks";
import { View } from "react-native";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = forwardRef(function CircularProgress<AnimationConfig = WithTimingConfig>(
    rawProps: CircularProgressProps<AnimationConfig>,
    ref: ForwardedRef<View>,
): JSX.Element {
    const { props, comps } = useCircularProgress(rawProps);

    const {
        value = 0,
        animation = withTiming,
        animationConfig = { duration: 300, easing: Easing.linear },
        strokeLinecap,
        children,
        style: _style,
    } = props;

    const style = useCircularProgressStyles(props, comps);
    const { size = 100, thickness = 4, color, backgroundColor, ...rootStyle } = style;

    const { viewBox, backgroundRadius, progressRadius, strokeDasharray } = useCircularProgressShape(
        { size, thickness },
    );

    const animatedValue = useSharedValue(0);

    useEffect(() => {
        animatedValue.value = animation(value, animationConfig as any);
    }, [value]);

    const animatedProps = useAnimatedProps<CircleProps>(
        () => ({
            strokeDashoffset: strokeDasharray - (strokeDasharray * animatedValue.value) / 100,
        }),
        [],
    );

    return (
        <CircularProgressRoot
            ref={ref as ForwardedRef<any>}
            accessibilityRole="progressbar"
            style={rootStyle}
        >
            <CircularProgressSvg
                width={size}
                height={size}
                viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
            >
                <Circle cx="50%" cy="50%" r={backgroundRadius} fill={backgroundColor} />
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    stroke={color}
                    strokeWidth={thickness}
                    r={progressRadius}
                    fill="transparent"
                    strokeLinecap={strokeLinecap}
                    strokeDasharray={strokeDasharray}
                    animatedProps={animatedProps}
                />
            </CircularProgressSvg>
            {children && <CircularProgressContent>{children}</CircularProgressContent>}
        </CircularProgressRoot>
    );
});

export default CircularProgress as <AnimationConfig = WithTimingConfig>(
    props: CircularProgressProps<AnimationConfig> & RefAttributes<View>,
) => JSX.Element;
