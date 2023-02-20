import { extractTextStyles } from "@peersyst/react-native-utils";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { useGlobalStyles } from "../../../config";
import { SwipeButtonStyle } from "../SwipeButton.types";
import useSlideToAcceptDefaultStyles from "./useSwipeButtonDefaultStyles";

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
    style: SwipeButtonStyle,
    color: string,
    { disabled }: UseSwipeButtonStylesOptions,
): UseSwipeButtonStylesResult {
    const {
        track: defaultTrackStyle,
        rail: defaultRailStyle,
        thumb: defaultThumbStyle,
        disabled: {
            track: defaultDisabledTrackStyle,
            rail: defaultDisabledRailStyle,
            thumb: defaultDisabledThumbStyle,
            ...defaultDisabledRootStyle
        } = {},
        ...defaultRootStyle
    } = useSlideToAcceptDefaultStyles(color);

    const {
        track: globalTrackStyle,
        rail: globalRailStyle,
        thumb: globalThumbStyle,
        disabled: {
            track: globalDisabledTrackStyle = {},
            rail: globalDisabledRailStyle = {},
            thumb: globalDisabledThumbStyle = {},
            ...globalDisabledRootStyle
        } = {},
        ...globalRootStyle
    } = useGlobalStyles("SwipeButton");

    const {
        track: trackStyle,
        rail: railStyle,
        thumb: thumbStyle,
        disabled: {
            track: disabledTrackStyle,
            rail: disabledRailStyle,
            thumb: disabledThumbStyle,
            ...disabledRootStyle
        } = {},
        ...rootStyle
    } = style;

    const [contentStyles, rootStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultRootStyle,
                ...globalRootStyle,
                ...rootStyle,
                ...(disabled && {
                    ...defaultDisabledRootStyle,
                    ...globalDisabledRootStyle,
                    ...disabledRootStyle,
                }),
            }),
        [
            defaultRootStyle,
            globalRootStyle,
            rootStyle,
            defaultDisabledRootStyle,
            globalDisabledRootStyle,
            disabledRootStyle,
            disabled,
        ],
    );

    const trackStyles = useMemo(
        () => ({
            ...defaultTrackStyle,
            ...globalTrackStyle,
            ...trackStyle,
            ...(disabled && {
                ...defaultDisabledTrackStyle,
                ...globalDisabledTrackStyle,
                ...disabledTrackStyle,
            }),
        }),
        [
            defaultTrackStyle,
            globalTrackStyle,
            trackStyle,
            defaultDisabledTrackStyle,
            globalDisabledTrackStyle,
            disabledTrackStyle,
            disabled,
        ],
    );

    const railStyles = useMemo(
        () => ({
            ...defaultRailStyle,
            ...globalRailStyle,
            ...railStyle,
            ...(disabled && {
                ...defaultDisabledRailStyle,
                ...globalDisabledRailStyle,
                ...disabledRailStyle,
            }),
        }),
        [
            defaultRailStyle,
            globalRailStyle,
            railStyle,
            defaultDisabledRailStyle,
            globalDisabledRailStyle,
            disabledRailStyle,
            disabled,
        ],
    );

    const [thumbContentStyles, thumbStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultThumbStyle,
                ...globalThumbStyle,
                ...thumbStyle,
                ...(disabled && {
                    ...defaultDisabledThumbStyle,
                    ...globalDisabledThumbStyle,
                    ...disabledThumbStyle,
                }),
            }),
        [
            defaultThumbStyle,
            globalThumbStyle,
            thumbStyle,
            defaultDisabledThumbStyle,
            globalDisabledThumbStyle,
            disabledThumbStyle,
            disabled,
        ],
    );

    return {
        contentStyles,
        rootStyles,
        trackStyles,
        railStyles,
        thumbContentStyles,
        thumbStyles,
    };
}
