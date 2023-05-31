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
import { useEffect } from "react";
import { useLayout } from "../../../hooks";
import { ExpandableContentRoot } from "./ExpandableContent.styles";

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

    const [layout, onLayout] = useLayout();

    const height = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
            overflow: "hidden",
        };
    });

    useEffect(() => {
        console.log("LAYOUT", layout);
        if (layout) height.value = animation(open ? layout.height : 0, animationConfig as any);
    }, [open, layout]);

    return (
        <Animated.View style={animatedStyle}>
            <ExpandableContentRoot style={style} onLayout={onLayout}>
                {children}
            </ExpandableContentRoot>
        </Animated.View>
    );
}

export default ExpandableContent;
