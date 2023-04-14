import { useColor } from "@peersyst/react-components-core";
import { LabelProps, LabelStyle } from "../Label.types";
import { TextStyle, ViewStyle } from "react-native";
import { useComputeStyles } from "../../../hooks";

export interface UseLabelStylesResult {
    rootStyle: ViewStyle;
    labelStyle: TextStyle | undefined;
}

export default function useLabelStyles(props: LabelProps): LabelStyle {
    const { color: colorProp = "text" } = props;

    const color = useColor(colorProp);

    return useComputeStyles("Label", props, {
        currentColor: color,
        label: {
            color,
        },
    });
}
