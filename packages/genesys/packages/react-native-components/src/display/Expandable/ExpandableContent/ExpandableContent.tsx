import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import { ExpandableContentProps } from "./ExpandableContent.types";
import { useExpandableContext } from "../context";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useExpandableContentStyles } from "./hooks";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    WithTimingConfig,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { LayoutSnitch } from "../../../util/LayoutSnitch";

function ExpandableContent<AnimationConfig = WithTimingConfig>(
    rawProps: ExpandableContentProps<AnimationConfig>,
): JSX.Element {
    const props = useMergeDefaultProps("ExpandableContent", rawProps);
    const {
        animation = withTiming,
        animationConfig = { duration: 300 },
        children,
        style: _style,
    } = props;

    const { open } = useExpandableContext();

    const style = useExpandableContentStyles(props, open);

    const [layout, setLayout] = useState<LayoutRectangle | undefined>(undefined);

    const handleLayout = (event: LayoutChangeEvent) => {
        if (layout === undefined) {
            setLayout(event.nativeEvent.layout);
        }
    };

    const height = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
        };
    });

    useEffect(() => {
        if (layout) height.value = animation(open ? layout.height : 0, animationConfig as any);
    }, [open, layout]);

    return (
        <LayoutSnitch onLayout={handleLayout}>
            <Animated.View style={animatedStyle}>
                <View style={style}>{children}</View>
            </Animated.View>
        </LayoutSnitch>
    );
}

export default ExpandableContent;
