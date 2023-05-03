import { useComputeStyles, useSplitTextAndViewStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";
import { ChipProps, ChipComps, ChipTextStyle, ChipRootStyle } from "../Chip.types";

export interface UseChipStylesResult {
    textStyle: ChipTextStyle;
    rootStyle: ChipRootStyle;
}

/**
 *
 * @param props Chip props
 * @param computed Chip computed props
 * @param pressed Chip pressed flag
 * @returns [textStyle, rootStyle] computed from parameters using stylesheets
 */
export default function useChipStyles(
    props: ChipProps,
    computed: ChipComps,
    pressed: boolean,
): UseChipStylesResult {
    const {
        variant = "filled",
        size = "md",
        disabled,
        rounded = false,
        pressable: pressableProp,
        onPress,
    } = props;
    const { color } = computed;
    const pressable = pressableProp ?? !!onPress;

    const compute = makeStyleComputation<ChipProps>(
        function (stylesheet) {
            const {
                disabled: disabledStyles = {},
                pressed: pressedStyles = {},
                rounded: roundedStyles = {},
                ...styles
            } = stylesheet;

            const { rounded: roundedVariantStyles, ...variantStyles } = styles[variant] || {};
            const { rounded: roundedSizeStyles, ...sizeStyles } = styles[size] || {};
            const { rounded: roundedPressedVariantStyles, ...pressedVariantStyles } =
                pressedStyles[variant] || {};
            const { rounded: roundedDisabledVariantStyles, ...disabledVariantStyles } =
                disabledStyles[variant] || {};

            return {
                ...styles,
                ...variantStyles,
                ...sizeStyles,
                ...(rounded && {
                    ...roundedStyles,
                    ...roundedVariantStyles,
                    ...roundedSizeStyles,
                    ...roundedPressedVariantStyles,
                    ...roundedDisabledVariantStyles,
                }),
                ...(pressable && pressed && { ...pressedStyles, ...pressedVariantStyles }),
                ...(disabled && { ...disabledStyles, ...disabledVariantStyles }),
            };
        },
        [variant, size, disabled, pressed],
    );

    const computedStyles = useComputeStyles("Chip", props, { currentColor: color }, { compute });

    const [textStyle, rootStyle] = useSplitTextAndViewStyles(computedStyles);

    return {
        textStyle,
        rootStyle,
    };
}
