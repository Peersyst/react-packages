import {
    SwipeButtonRoot,
    SwipeButtonTrack,
    SwipeButtonRail,
    SwipeButtonThumb,
} from "./SwipeButton.styles";
import { SwipeButtonProps } from "./SwipeButton.types";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { classify } from "@peersyst/react-utils";
import useSwipeButtonGestureAnimation from "./hooks/useSwipeButtonGestureAnimation";
import { LayoutChangeEvent, LayoutRectangle, Text } from "react-native";
import { isValidElement, ReactElement, useState } from "react";
import useSwipeButtonStyles from "./hooks/useSwipeButtonStyles";
import { ContainedSuspense } from "../../feedback/ContainedSuspense";
import { ElementStyler } from "../../util/ElementStyler";
import useSwipeButton from "./hooks/useSwipeButton";
import { ChevronRightIcon } from "../../assets/icons";

const AnimatedSwipeButtonThumb = Animated.createAnimatedComponent(classify(SwipeButtonThumb));

const SwipeButton = (props: SwipeButtonProps) => {
    const {
        onSwipe,
        children,
        fullWidth = true,
        thumbContent = <ChevronRightIcon />,
        style = {},
        loading = false,
        color,
        handleSubmit,
        enabled,
        loadingElement,
    } = useSwipeButton(props);

    const { contentStyles, rootStyles, trackStyles, railStyles, thumbContentStyles, thumbStyles } =
        useSwipeButtonStyles(style, color!, {
            disabled: !enabled,
        });

    const handleSlide = (): void => {
        if (handleSubmit) handleSubmit();
        else onSwipe?.();
    };

    const [railLayout, setRailLayout] = useState<LayoutRectangle>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    const thumbSize = railLayout.height;
    const maxSwipeDistance = railLayout.width - thumbSize;
    const { animatedStyle, gesture } = useSwipeButtonGestureAnimation({
        maxDistance: maxSwipeDistance,
        onMaxDistanceReached: handleSlide,
    });

    const handleSwipeButtonRailLayout = (event: LayoutChangeEvent) => {
        setRailLayout(event.nativeEvent.layout);
    };

    return (
        <SwipeButtonRoot fullWidth={fullWidth} style={rootStyles}>
            {!loading && (
                <SwipeButtonTrack
                    onStartShouldSetResponder={() => true}
                    style={[{ borderRadius: rootStyles.borderRadius }, trackStyles]}
                >
                    <SwipeButtonRail
                        onLayout={handleSwipeButtonRailLayout}
                        style={[{ borderRadius: rootStyles.borderRadius }, railStyles]}
                    >
                        <GestureDetector gesture={gesture}>
                            <AnimatedSwipeButtonThumb
                                onStartShouldSetResponder={() => true}
                                style={[
                                    { borderRadius: rootStyles.borderRadius },
                                    thumbStyles,
                                    { height: thumbSize, width: thumbSize },
                                    animatedStyle,
                                ]}
                            >
                                {thumbContent && (
                                    <ElementStyler
                                        style={{ fontSize: "100%", ...thumbContentStyles }}
                                    >
                                        {thumbContent}
                                    </ElementStyler>
                                )}
                            </AnimatedSwipeButtonThumb>
                        </GestureDetector>
                    </SwipeButtonRail>
                </SwipeButtonTrack>
            )}
            <ContainedSuspense
                isLoading={loading}
                activityIndicatorColor={contentStyles.color as string}
                activityIndicatorSize={
                    contentStyles.fontSize && contentStyles.fontSize > 20 ? "large" : "small"
                }
                fallback={loadingElement}
            >
                <>
                    {typeof children === "string" ? (
                        <Text style={contentStyles}>{children}</Text>
                    ) : isValidElement(children) ? (
                        <ElementStyler style={contentStyles}>
                            {children as ReactElement}
                        </ElementStyler>
                    ) : (
                        children
                    )}
                </>
            </ContainedSuspense>
        </SwipeButtonRoot>
    );
};

export default SwipeButton;
