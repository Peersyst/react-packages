import { deepmerge } from "@peersyst/react-utils";
import { useComputeStyles, useSplitTextAndViewStyles } from "../../../../hooks";
import { makeStyleComputation } from "../../../../utils";
import { ExpandableDisplayProps } from "../ExpandableDisplay.types";
import { TextStyle, ViewStyle } from "react-native";

export interface UseExpandableDispplayStylesResult {
    rootStyle: ViewStyle;
    contentStyle: TextStyle;
    iconStyle: TextStyle;
}

/**
 *
 * @param props Expandable props
 * @param open Expandable open flag
 * @returns Expandable styles
 */
export default function useExpandableDisplayStyles(
    props: ExpandableDisplayProps,
    open: boolean,
): UseExpandableDispplayStylesResult {
    const compute = makeStyleComputation<ExpandableDisplayProps>(
        function (stylesheet) {
            const { $open: openStyles, ...styles } = stylesheet;

            let style = styles;

            if (open) {
                style = deepmerge(style, openStyles);
            }

            return style;
        },
        [open],
    );

    const computedStyles = useComputeStyles("ExpandableDisplay", props, undefined, { compute });

    const [textStyle, rootStyle, restStyle] = useSplitTextAndViewStyles(computedStyles);

    return {
        rootStyle: rootStyle,
        contentStyle: textStyle,
        iconStyle: restStyle.$icon || {},
    };
}
