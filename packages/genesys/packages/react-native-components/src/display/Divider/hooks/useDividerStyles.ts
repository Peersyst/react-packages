import { ViewStyle } from "react-native";
import { DividerProps } from "../Divider.types";
import {
    currentColor,
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useColor } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../../config";

export default function useDividerStyles(props: DividerProps): ViewStyle {
    const { color: colorProp, style } = props;

    const color = useColor(colorProp);

    const defaultStyle = useGlobalStyles("Divider");
    const stylesheet = useStylesheet<DividerProps>("Divider");
    const mergedStylesheets = useMergeStylesheets<DividerProps>(
        {
            currentColor: color,
            backgroundColor: currentColor(),
        },
        stylesheet,
        defaultStyle,
        style,
    );

    return useResolveStylesheet(props, mergedStylesheets);
}
