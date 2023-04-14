import { extractTextStyles } from "@peersyst/react-native-utils";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { SwipeButtonProps } from "../SwipeButton.types";
import { SwipeButtonComputedProps } from "./useSwipeButton";
import { useComputeStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";

export interface UseSwipeButtonStylesOptions {
    disabled: boolean;
}

export interface UseSwipeButtonStylesResult {
    contentStyles: TextStyle;
    rootStyles: ViewStyle;
    trackStyles: ViewStyle;
    railStyles: ViewStyle;
    thumbContentStyles: TextStyle;
    thumbStyles: ViewStyle;
}

export default function useSwipeButtonStyles(
    props: SwipeButtonProps,
    computed: SwipeButtonComputedProps,
): UseSwipeButtonStylesResult {
    const { enabled, color = "primary" } = computed;

    const compute = makeStyleComputation<SwipeButtonProps>(
        function (stylesheet) {
            const {
                track: trackStyle,
                thumb: thumbStyle,
                rail: railStyle,
                disabled: {
                    track: disabledTrackStyle,
                    rail: disabledRailStyle,
                    thumb: disabledThumbStyle,
                    ...disabledStyle
                } = {},
                ...styles
            } = stylesheet;

            return {
                ...styles,
                ...(!enabled && { ...disabledStyle }),
                track: {
                    ...trackStyle,
                    ...(!enabled && { ...disabledTrackStyle }),
                },
                thumb: {
                    ...thumbStyle,
                    ...(!enabled && { ...disabledThumbStyle }),
                },
                rail: {
                    ...railStyle,
                    ...(!enabled && { ...disabledRailStyle }),
                },
            };
        },
        [enabled],
    );

    const computedStyles = useComputeStyles(
        "SwipeButton",
        props,
        { currentColor: color },
        { compute },
    );

    return useMemo(() => {
        const {
            track: trackStyles = {},
            thumb: thumbStyle,
            rail: railStyles = {},
            ...styles
        } = computedStyles;

        const [contentStyles, rootStyles] = extractTextStyles(styles);
        const [thumbContentStyles, thumbStyles] = extractTextStyles(thumbStyle);

        return {
            contentStyles,
            rootStyles,
            trackStyles,
            railStyles,
            thumbContentStyles,
            thumbStyles,
        };
    }, [computedStyles]);
}
