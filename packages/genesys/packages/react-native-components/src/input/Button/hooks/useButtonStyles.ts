import useDefaultStyles from "./useButtonDefaultStyle.ts";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { ButtonRootStyle, ButtonStyle, ButtonTextStyle } from "../Button.types";
import { useMemo } from "react";
import { ButtonSize, ButtonVariant } from "@peersyst/react-components-core";
import { useGlobalStyles } from "src/config";

export interface UseButtonStylesResult {
    textStyle: ButtonTextStyle;
    rootStyle: ButtonRootStyle;
}

// TODO: Refactor or add sizes merge to stateful styles
export default function useButtonStyles(
    style: ButtonStyle,
    variant: ButtonVariant,
    size: ButtonSize,
    disabled: boolean,
    pressed: boolean,
    color: string | undefined,
): UseButtonStylesResult {
    const { defaultStyles, defaultDisabledStyles, defaultPressedStyles, defaultSizeStyles } =
        useDefaultStyles(color);
    const {
        disabled: globalDisabledStyles = {},
        pressed: globalPressedStyles = {},
        ...globalStyles
    } = useGlobalStyles("Button");
    const { disabled: disabledStyles = {}, pressed: pressedStyles = {}, ...styles } = style;

    const [textStyles, rootStyles] = useMemo(
        () => extractTextStyles({ ...defaultStyles, ...globalStyles, ...styles }),
        [defaultStyles, globalStyles, styles],
    );

    const [variantTextStyles, variantRootStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultStyles[variant],
                ...globalStyles[variant],
                ...styles[variant],
            }),
        [defaultStyles, globalStyles, styles, variant],
    );

    const [sizeTextStyles, sizeRootStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultSizeStyles[size],
                ...globalStyles[size],
                ...styles[size],
            }),
        [defaultSizeStyles, globalStyles, styles, size],
    );

    const [pressedTextStyles, pressedRootStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultPressedStyles,
                ...globalPressedStyles,
                ...pressedStyles,
            }),
        [defaultPressedStyles, globalPressedStyles, pressedStyles],
    );

    const [variantPressedTextStyles, variantPressedRootStyles] = useMemo(() => {
        return extractTextStyles({
            ...defaultPressedStyles[variant],
            ...globalPressedStyles[variant],
            ...pressedStyles[variant],
        });
    }, [defaultPressedStyles, globalPressedStyles, pressedStyles, variant]);

    const [disabledTextStyles, disabledRootStyles] = useMemo(
        () =>
            extractTextStyles({
                ...defaultDisabledStyles,
                ...globalDisabledStyles,
                ...disabledStyles,
            }),
        [defaultDisabledStyles, globalDisabledStyles, disabledStyles],
    );

    const [variantDisabledTextStyles, variantDisabledRootStyles] = useMemo(() => {
        return extractTextStyles({
            ...defaultDisabledStyles[variant],
            ...globalDisabledStyles[variant],
            ...disabledStyles[variant],
        });
    }, [defaultDisabledStyles, globalDisabledStyles, disabledStyles, variant]);

    const textStyle = {
        ...textStyles,
        ...variantTextStyles,
        ...sizeTextStyles,
        ...(pressed && { ...pressedTextStyles, ...variantPressedTextStyles }),
        ...(disabled && { ...disabledTextStyles, ...variantDisabledTextStyles }),
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
