import { ViewStyle } from "react-native";
import { Gesture, PanGesture } from "react-native-gesture-handler";
import {
    AnimatedStyleProp,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export interface UseSwipeButtonGestureAnimationOptions {
    maxDistance: number;
    onMaxDistanceReached?: () => void;
}

export interface UseSwipeButtonGestureAnimationReturn {
    animatedStyle: AnimatedStyleProp<ViewStyle>;
    gesture: PanGesture;
}

export default function useSwipeButtonGestureAnimation({
    maxDistance,
    onMaxDistanceReached,
}: UseSwipeButtonGestureAnimationOptions): UseSwipeButtonGestureAnimationReturn {
    const xPos = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        "worklet";
        return {
            transform: [{ translateX: xPos.value }],
        };
    });

    const start = useSharedValue(0);
    const gesture = Gesture.Pan()
        .onUpdate(({ translationX }) => {
            const distance = translationX + start.value;
            if (distance >= 0 && distance <= maxDistance) xPos.value = translationX + start.value;
            else if (distance > maxDistance * 0.9) onMaxDistanceReached?.();
            else xPos.value = withTiming(0);
        })
        .onEnd(() => {
            start.value = xPos.value;
        })
        .onFinalize(() => {
            xPos.value = withTiming(0);
            start.value = 0;
        });

    return { animatedStyle, gesture };
}
