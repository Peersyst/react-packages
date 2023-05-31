import { TextStyle, ViewStyle } from "react-native";
import { SelectItemProps } from "../SelectItem.types";
import { useComputeStyles, useSplitTextAndViewStyles } from "../../../../hooks";
import { makeStyleComputation } from "../../../../utils";

export default function useSelectItemStyles<T = any>(
    props: SelectItemProps<T>,
    selected: boolean,
    readonly: boolean,
): [TextStyle, ViewStyle] {
    const compute = makeStyleComputation(
        function (stylesheet) {
            const { selected: selectedStyle = {}, readonly: readonlyStyle, ...style } = stylesheet;

            return {
                ...style,
                ...(selected && { ...selectedStyle }),
                ...(readonly && { ...readonlyStyle }),
            };
        },
        [selected, readonly],
    );

    const computedStyles = useComputeStyles("SelectItem", props, undefined, {
        compute,
    });

    const [textStyle, viewStyle] = useSplitTextAndViewStyles(computedStyles);

    return [textStyle, viewStyle];
}
