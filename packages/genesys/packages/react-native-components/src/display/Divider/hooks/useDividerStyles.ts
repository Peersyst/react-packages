import { ViewStyle } from "react-native";
import { DividerProps } from "../Divider.types";
import { currentColor } from "@peersyst/react-native-styled";
import { useColor } from "@peersyst/react-components-core";
import { useComputeStyles } from "../../../hooks";

export default function useDividerStyles(props: DividerProps): ViewStyle {
    const { color: colorProp } = props;

    const color = useColor(colorProp);

    return useComputeStyles("Divider", props, {
        currentColor: color,
        backgroundColor: currentColor(),
    });
}
