import styled from "styled-components";
import sliderUnstyledClasses from "./SliderUnstyled/sliderUnstyledClasses";
import { generateUtilityClasses } from "../utils";
import {
    SliderMarkLabelProps,
    SliderMarkProps,
    SliderRailProps,
    SliderRootProps,
    SliderThumbProps,
    SliderTrackProps,
    SliderValueLabelProps,
} from "./Slider.types";
import { alpha, darken } from "@peersyst/react-utils";
import SliderValueLabelUnstyled from "./SliderUnstyled/SliderValueLabelUnstyled";

const sliderClasses = {
    ...sliderUnstyledClasses,
    ...generateUtilityClasses("Slider", ["sm", "thumbSm"]),
};

export const SliderRoot = styled.span<SliderRootProps>(
    ({ theme, ownerState: { orientation, size, valueLabelDisplay }, marked }) => ({
        borderRadius: 12,
        boxSizing: "content-box",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        touchAction: "none",
        color: theme.palette.primary,
        WebkitTapHighlightColor: "transparent",
        ...(orientation === "horizontal" && {
            height: 4,
            width: "100%",
            padding: "13px 0",
            // The primary input mechanism of the device includes a pointing device of limited accuracy.
            "@media (pointer: coarse)": {
                // Reach 42px touch target, about ~8mm on screen.
                padding: "20px 0",
            },
            ...(size === "sm" && {
                height: 2,
            }),
            ...(marked && {
                marginBottom: 20,
            }),
            ...(valueLabelDisplay === "on" && {
                marginTop: 24,
            }),
        }),
        ...(orientation === "vertical" && {
            height: "100%",
            width: 4,
            padding: "0 13px",
            // The primary input mechanism of the device includes a pointing device of limited accuracy.
            "@media (pointer: coarse)": {
                // Reach 42px touch target, about ~8mm on screen.
                padding: "0 20px",
            },
            ...(size === "sm" && {
                width: 2,
            }),
            ...(marked && {
                marginRight: 44,
            }),
        }),
        "@media print": {
            colorAdjust: "exact",
        },
        [`&.${sliderClasses.disabled}`]: {
            pointerEvents: "none",
            cursor: "default",
            color: theme.palette.disabled,
        },
        [`&.${sliderClasses.dragging}`]: {
            [`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]: {
                transition: "none",
            },
        },
    }),
);

export const SliderRail = styled.span<SliderRailProps>(
    ({ ownerState: { orientation, track } }) => ({
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        backgroundColor: "currentColor",
        opacity: 0.38,
        ...(orientation === "horizontal" && {
            width: "100%",
            height: "inherit",
            top: "50%",
            transform: "translateY(-50%)",
        }),
        ...(orientation === "vertical" && {
            height: "100%",
            width: "inherit",
            left: "50%",
            transform: "translateX(-50%)",
        }),
        ...(track === "inverted" && {
            opacity: 1,
        }),
    }),
);

export const SliderTrack = styled.span<SliderTrackProps>(
    ({ theme, ownerState: { orientation, track, size } }) => ({
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        border: "1px solid currentColor",
        backgroundColor: "currentColor",
        ...(size === "sm" && {
            border: "none",
        }),
        ...(orientation === "horizontal" && {
            height: "inherit",
            top: "50%",
            transform: "translateY(-50%)",
        }),
        ...(orientation === "vertical" && {
            width: "inherit",
            left: "50%",
            transform: "translateX(-50%)",
        }),
        ...(track === false && {
            display: "none",
        }),
        ...(track === "inverted" && {
            backgroundColor: darken(theme.palette.primary, 0.5),
            borderColor: darken(theme.palette.primary, 0.5),
        }),
    }),
);

export const SliderThumb = styled.span<SliderThumbProps>(
    ({ theme, ownerState: { orientation, size } }) => ({
        position: "absolute",
        width: 20,
        height: 20,
        boxSizing: "border-box",
        borderRadius: "50%",
        outline: 0,
        backgroundColor: "currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "box-shadow 150ms",
        ...(size === "sm" && {
            width: 12,
            height: 12,
        }),
        ...(orientation === "horizontal" && {
            top: "50%",
            transform: "translate(-50%, -50%)",
        }),
        ...(orientation === "vertical" && {
            left: "50%",
            transform: "translate(-50%, 50%)",
        }),
        "&:before": {
            position: "absolute",
            content: '""',
            borderRadius: "inherit",
            width: "100%",
            height: "100%",
            boxShadow: theme.shadows[2],
            ...(size === "sm" && {
                boxShadow: "none",
            }),
        },
        "&:after": {
            position: "absolute",
            content: '""',
            borderRadius: "50%",
            // 42px is the hit target
            width: 42,
            height: 42,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        ["&:hover"]: {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.primary, 0.16)}`,
            "@media (hover: none)": {
                boxShadow: "none",
            },
        },
        [`&.${sliderClasses.active}`]: {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary, 0.16)}`,
        },
        [`&.${sliderClasses.disabled}`]: {
            "&:hover": {
                boxShadow: "none",
            },
        },
    }),
);

export const SliderValueLabel = styled(SliderValueLabelUnstyled)<SliderValueLabelProps>(
    ({ theme, ownerState: { orientation, size } }) => ({
        [`&.${sliderClasses.valueLabelOpen}`]: {
            transform: "translateY(-100%) scale(1)",
        },
        zIndex: 1,
        whiteSpace: "nowrap",
        fontSize: "0.875rem",
        fontWeight: 500,
        transition: "transform 150ms",
        transform: "translateY(-100%) scale(0)",
        position: "absolute",
        backgroundColor: theme.palette.background,
        boxShadow: theme.shadows[2],
        borderRadius: 2,
        color: theme.palette.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25rem 0.75rem",
        ...(orientation === "horizontal" && {
            top: "-10px",
            transformOrigin: "bottom center",
            "&:before": {
                position: "absolute",
                content: '""',
                width: 8,
                height: 8,
                transform: "translate(-50%, 50%) rotate(45deg)",
                backgroundColor: "inherit",
                bottom: 0,
                left: "50%",
            },
        }),
        ...(orientation === "vertical" && {
            right: "30px",
            top: "24px",
            transformOrigin: "right center",
            "&:before": {
                position: "absolute",
                content: '""',
                width: 8,
                height: 8,
                transform: "translate(-50%, 50%) rotate(45deg)",
                backgroundColor: "inherit",
                right: "-20%",
                top: "25%",
            },
        }),
        ...(size === "sm" && {
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
        }),
    }),
);

export const SliderMark = styled.span<SliderMarkProps>(
    ({ theme, ownerState: { orientation }, markActive }) => ({
        position: "absolute",
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundColor: "currentColor",
        ...(orientation === "horizontal" && {
            top: "50%",
            transform: "translate(-1px, -50%)",
        }),
        ...(orientation === "vertical" && {
            left: "50%",
            transform: "translate(-50%, 1px)",
        }),
        ...(markActive && {
            backgroundColor: theme.palette.background,
            opacity: 0.8,
        }),
    }),
);

export const SliderMarkLabel = styled.span<SliderMarkLabelProps>(
    ({ theme, ownerState: { orientation }, markLabelActive }) => ({
        fontSize: "0.875rem",
        color: theme.palette.text,
        position: "absolute",
        whiteSpace: "nowrap",
        ...(orientation === "horizontal" && {
            top: 30,
            transform: "translateX(-50%)",
            "@media (pointer: coarse)": {
                top: 40,
            },
        }),
        ...(orientation === "vertical" && {
            left: 36,
            transform: "translateY(50%)",
            "@media (pointer: coarse)": {
                left: 44,
            },
        }),
        ...(markLabelActive && {
            color: theme.palette.text,
        }),
    }),
);
