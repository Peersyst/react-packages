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
    color: string | undefined,
): UseButtonStylesResult {
    const { defaultStyles, defaultDisabledStyles, defaultPressedStyles, defaultSizeStyles } =
        useDefaultStyles(color);
    const {
        disabled: { variant: variantDisabledStyles, ...disabledStyles } = {},
        pressed: { variant: variantPressedStyles, ...pressedStyles } = {},
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
        return extractTextStyles({
            ...defaultDisabledStyles.variant?.[variant],
            ...variantDisabledStyles?.[variant],
        });
    }, [variantDisabledStyles, defaultDisabledStyles, variant]);

    const [pressedTextStyles, pressedRootStyles] = useMemo(
        () => extractTextStyles({ ...defaultPressedStyles, ...pressedStyles }),
        [defaultPressedStyles, pressedStyles],
    );

    const [variantPressedTextStyles, variantPressedRootStyles] = useMemo(() => {
        return extractTextStyles({
            ...defaultPressedStyles.variant?.[variant],
            ...variantPressedStyles?.[variant],
        });
    }, [variantPressedStyles, defaultPressedStyles, variant]);

    const [variantTextStyles, variantRootStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultStyles.variant?.[variant],
                ...styles.variant?.[variant],
            }),
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
