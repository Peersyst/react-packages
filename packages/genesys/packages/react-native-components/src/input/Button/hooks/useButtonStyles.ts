import { ButtonProps, ButtonRootStyle, ButtonTextStyle } from "../Button.types";
import { ButtonComputedProps } from "./useButton";
import { useComputeStyles, useTextAndViewStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";

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
    const { variant = "filled", size = "md" } = props;
    const { enabled, color } = computed;

    const compute = makeStyleComputation<ButtonProps>(
        function (stylesheet) {
            const {
                disabled: disabledStyles = {},
                pressed: pressedStyles = {},
                ...styles
            } = stylesheet;

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
        },
        [variant, size, enabled, pressed],
    );

    const computedStyles = useComputeStyles("Button", props, { currentColor: color }, { compute });

    const [textStyle, rootStyle] = useTextAndViewStyles(computedStyles);

    return {
        textStyle,
        rootStyle,
    };
}
