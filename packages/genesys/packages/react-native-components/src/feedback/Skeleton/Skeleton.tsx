import { SkeletonProps } from "./Skeleton.types";
import { SkeletonAnimation, SkeletonOverlay, SkeletonRoot } from "./Skeleton.styles";
import { Children, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

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

    const skeletonAnimation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(skeletonAnimation, {
                    toValue: 1,
                    duration: 750,
                    useNativeDriver: true,
                }),
                Animated.timing(skeletonAnimation, {
                    toValue: 0,
                    duration: 750,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: -1 },
        ).start();
    }, [skeletonAnimation]);

    return loading ? (
        <SkeletonRoot shape={shape} height={height} width={width}>
            <SkeletonOverlay appearance={appearance} />
            <SkeletonAnimation
                appearance={appearance}
                style={{ opacity: skeletonAnimation, ...style }}
            />
            <View style={{ opacity: 0 }}>{Children.only(child)}</View>
        </SkeletonRoot>
    ) : (
        <>{child}</>
    );
};

export default Skeleton;