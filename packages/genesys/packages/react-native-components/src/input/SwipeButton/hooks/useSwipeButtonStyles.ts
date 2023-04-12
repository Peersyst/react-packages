import { extractTextStyles } from "@peersyst/react-native-utils";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { useGlobalStyles } from "../../../config";
import { SwipeButtonProps } from "../SwipeButton.types";
import { SwipeButtonComputedProps } from "./useSwipeButton";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";

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
    const { style = {} } = props;

    const { enabled, color = "primary" } = computed;

    const defaultStyle = useGlobalStyles("SwipeButton");
    const stylesheet = useStylesheet<SwipeButtonProps>("SwipeButton");
    const mergedStylesheets = useMergeStylesheets<SwipeButtonProps>(
        { currentColor: color },
        stylesheet,
        defaultStyle,
        style,
    );

    const swipeButtonStyles = useMemo(() => {
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
        } = mergedStylesheets;

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
    }, [mergedStylesheets, enabled]);

    const resolvedStyles = useResolveStylesheet(props, swipeButtonStyles);

    return useMemo(() => {
        const {
            track: trackStyles = {},
            thumb: thumbStyle,
            rail: railStyles = {},
            ...styles
        } = resolvedStyles;

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
    }, [resolvedStyles]);
}
