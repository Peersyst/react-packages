import { SkeletonProps } from "./Skeleton.types";
import { SkeletonAnimation, SkeletonOverlay, SkeletonRoot } from "./Skeleton.styles";
import { Children } from "react";
import { View } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence,
} from "react-native-reanimated";

const Skeleton = (props: SkeletonProps): JSX.Element => {
    const {
        width,
        height,
        shape = "stadium",
        loading = true,
        appearance,
        style,
        children: child,
    } = useMergeDefaultProps("Skeleton", props);

    const opacity = useSharedValue(0);
    opacity.value = withRepeat(
        withSequence(withTiming(1, { duration: 750 }), withTiming(0, { duration: 750 })),
        -1,
    );
    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return loading ? (
        <SkeletonRoot shape={shape} height={height} width={width}>
            <SkeletonOverlay appearance={appearance} />
            <SkeletonAnimation appearance={appearance} style={{ ...animatedStyles, ...style }} />
            <View style={{ opacity: 0 }}>{Children.only(child)}</View>
        </SkeletonRoot>
    ) : (
        <>{child}</>
    );
};

export default Skeleton;
