import { deepmerge } from "@peersyst/react-utils";
import { useComputeStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";
import { ExpandableProps } from "../Expandable.types";
import { ViewStyle } from "react-native";
import { StatelessExpandableDisplayStyle } from "../ExpandableDisplay/ExpandableDisplay.types";
import { StatelessExpandableContentStyle } from "../ExpandableContent";

export interface UseExpandableStylesResult {
    rootStyle: ViewStyle;
    displayStyle: StatelessExpandableDisplayStyle;
    contentStyle: StatelessExpandableContentStyle;
}

/**
 *
 * @param props Expandable props
 * @param open Expandable open flag
 * @returns Expandable styles
 */
export default function useExpandableStyles(
    props: ExpandableProps,
    open: boolean,
): UseExpandableStylesResult {
    const compute = makeStyleComputation<ExpandableProps>(
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

    const {
        $display: displayStyle,
        $content: contentStyle,
        ...rootStyle
    } = useComputeStyles("Expandable", props, undefined, {
        compute,
    });

    return {
        rootStyle,
        displayStyle: displayStyle as StatelessExpandableDisplayStyle,
        contentStyle: contentStyle as StatelessExpandableContentStyle,
    };
}
