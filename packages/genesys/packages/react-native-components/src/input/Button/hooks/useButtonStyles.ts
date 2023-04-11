import { ButtonProps, ButtonRootStyle, ButtonTextStyle } from "../Button.types";
import { useMemo } from "react";
import { ButtonComputedProps } from "./useButton";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useTextAndViewStyles } from "../../../hooks";

export interface UseButtonStylesResult {
    textStyle: ButtonTextStyle;
    rootStyle: ButtonRootStyle;
}

/**
 *
 * @param props Button props
 * @param computed Button computed props
 * @param pressed Button pressed flag
 * @returns [textStyle, rootStyle] computed from parameters using stylesheets
 */
export default function useButtonStyles(
    props: ButtonProps,
    computed: ButtonComputedProps,
    pressed: boolean,
): UseButtonStylesResult {
    const { style = {}, variant = "filled", size = "md" } = props;
    const { enabled, color } = computed;

    const stylesheet = useStylesheet<ButtonProps>("Button");
    const mergedStylesheets = useMergeStylesheets<ButtonProps>(
        { currentColor: color },
        stylesheet,
        style,
    );

    const buttonStyles = useMemo(() => {
        const {
            disabled: disabledStyles = {},
            pressed: pressedStyles = {},
            ...styles
        } = mergedStylesheets;

        const variantStyles = styles[variant];
        const sizeStyles = styles[size];
        const pressedVariantStyles = pressedStyles[variant];
        const disabledVariantStyles = disabledStyles[variant];

        return {
            ...styles,
            ...variantStyles,
            ...sizeStyles,
            ...(pressed && { ...pressedStyles, ...pressedVariantStyles }),
            ...(!enabled && { ...disabledStyles, ...disabledVariantStyles }),
        };
    }, [mergedStylesheets, variant, size, enabled, pressed, color]);

    const resolvedStyles = useResolveStylesheet(props, buttonStyles);

    const [textStyle, rootStyle] = useTextAndViewStyles(resolvedStyles);

    return {
        textStyle,
        rootStyle,
    };
}
