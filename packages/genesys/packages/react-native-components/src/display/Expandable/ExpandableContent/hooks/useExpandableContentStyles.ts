import { deepmerge } from "@peersyst/react-utils";
import { useComputeStyles } from "../../../../hooks";
import { makeStyleComputation } from "../../../../utils";
import {
    ExpandableContentProps,
    StatelessExpandableContentStyle,
} from "../ExpandableContent.types";

/**
 *
 * @param props Expandable props
 * @param open Expandable open flag
 * @returns Expandable styles
 */
export default function useExpandableContentStyles(
    props: ExpandableContentProps<any>,
    open: boolean,
): StatelessExpandableContentStyle {
    const compute = makeStyleComputation<ExpandableContentProps>(
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

    return useComputeStyles("ExpandableContent", props, undefined, { compute });
}
