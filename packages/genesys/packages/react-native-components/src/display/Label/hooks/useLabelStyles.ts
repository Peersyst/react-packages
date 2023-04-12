import { useColor } from "@peersyst/react-components-core";
import { LabelProps, LabelStyle } from "../Label.types";
import { useGlobalStyles } from "../../../config";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { TextStyle, ViewStyle } from "react-native";

export interface UseLabelStylesResult {
    rootStyle: ViewStyle;
    labelStyle: TextStyle | undefined;
}

export default function useLabelStyles(props: LabelProps): LabelStyle {
    const { color: colorProp = "text", style } = props;

    const color = useColor(colorProp);

    const defaultStyle = useGlobalStyles("Label");
    const stylesheet = useStylesheet<LabelProps>("Label");
    const mergedStylesheets = useMergeStylesheets<LabelProps>(
        {
            currentColor: color,
            label: {
                color,
            },
        },
        stylesheet,
        defaultStyle,
        style,
    );

    return useResolveStylesheet(props, mergedStylesheets);
}
