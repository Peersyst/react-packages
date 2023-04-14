import { TextStyle } from "react-native";
import { PressableTextProps } from "../PressableText.types";
import { useComputeStyles } from "../../../hooks";

export default function usePressableTextStyles(props: PressableTextProps): TextStyle {
    return useComputeStyles("PressableText", props);
}
