import { TextStyle } from "react-native";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { PressableTextProps } from "../PressableText.types";

export default function usePressableTextStyles(props: PressableTextProps): TextStyle {
    const { style } = props;

    const stylesheet = useStylesheet<PressableTextProps>("PressableText");

    const mergedStylesheet = useMergeStylesheets<PressableTextProps>(stylesheet, style);
    return useResolveStylesheet(props, mergedStylesheet);
}
