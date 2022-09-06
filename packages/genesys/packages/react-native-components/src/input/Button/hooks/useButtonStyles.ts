import { TextStyle, ViewStyle } from "react-native";
import useDefaultStyles from "./useDefaultStyles";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { ButtonStyle, ButtonStyles } from "../Button.types";
import { useMemo } from "react";
import { ButtonSize, ButtonVariant } from "@peersyst/react-components-core";

export interface UseButtonStylesResult {
    textStyle: TextStyle;
    rootStyle: Omit<ButtonStyle, keyof TextStyle> & ViewStyle;
}

export default function useButtonStyles(
    style: ButtonStyles,
    variant: ButtonVariant,
    size: ButtonSize,
    disabled: boolean,
    pressed: boolean,
): UseButtonStylesResult {
    const { defaultStyles, defaultDisabledStyles, defaultPressedStyles, defaultSizeStyles } =
        useDefaultStyles();
    const {
        disabled: {
            filled: filledDisabledStyles,
            text: textDisabledStyles,
            outlined: outlinedDisabledText,
            ...disabledStyles
        } = {},
        pressed: {
            filled: filledPressedStyles,
            text: textPressedStyles,
            outlined: outlinedPressedText,
            ...pressedStyles
        } = {},
        ...styles
    } = style;

    const [textStyles, rootStyles] = useMemo(
        () => extractTextStyles({ ...defaultStyles, ...styles }),
        [defaultStyles, styles],
    );
    const [disabledTextStyles, disabledRootStyles] = useMemo(
        () => extractTextStyles({ ...defaultDisabledStyles, ...disabledStyles }),
        [defaultDisabledStyles, disabledStyles],
    );

    const [variantDisabledTextStyles, variantDisabledRootStyles] = useMemo(() => {
        const disabledVariantStyles = {
            filled: filledDisabledStyles,
            text: textDisabledStyles,
            outlined: outlinedDisabledText,
        };
        return extractTextStyles({
            ...defaultDisabledStyles[variant],
            ...disabledVariantStyles[variant],
        });
    }, [
        filledDisabledStyles,
        defaultDisabledStyles,
        outlinedDisabledText,
        textDisabledStyles,
        variant,
    ]);

    const [pressedTextStyles, pressedRootStyles] = useMemo(
        () => extractTextStyles({ ...defaultPressedStyles, ...pressedStyles }),
        [defaultPressedStyles, pressedStyles],
    );

    const [variantPressedTextStyles, variantPressedRootStyles] = useMemo(() => {
        const pressedVariantStyles = {
            filled: filledPressedStyles,
            text: textPressedStyles,
            outlined: outlinedPressedText,
        };
        return extractTextStyles({
            ...defaultPressedStyles[variant],
            ...pressedVariantStyles[variant],
        });
    }, [
        filledPressedStyles,
        defaultPressedStyles,
        outlinedPressedText,
        textPressedStyles,
        variant,
    ]);

    const [variantTextStyles, variantRootStyles] = useMemo(
        () => extractTextStyles({ ...defaultStyles[variant], ...styles[variant] }),
        [defaultStyles, styles, variant],
    );

    const [sizeTextStyles, sizeRootStyles] = useMemo(
        () => extractTextStyles({ ...defaultSizeStyles[size], ...styles[size] }),
        [defaultSizeStyles, styles, size],
    );

    const textStyle = {
        ...textStyles,
        ...variantTextStyles,
        ...sizeTextStyles,
        ...(disabled && { ...disabledTextStyles, ...variantDisabledTextStyles }),
        ...(pressed && { ...pressedTextStyles, ...variantPressedTextStyles }),
    };
    const rootStyle = {
        ...rootStyles,
        ...variantRootStyles,
        ...sizeRootStyles,
        ...(disabled && { ...disabledRootStyles, ...variantDisabledRootStyles }),
        ...(pressed && { ...pressedRootStyles, ...variantPressedRootStyles }),
    };

    return { textStyle, rootStyle };
}
