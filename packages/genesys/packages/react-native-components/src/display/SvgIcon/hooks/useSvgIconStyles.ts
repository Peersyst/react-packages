import { SvgIconProps } from "../SvgIcon.types";
import { StyleSheet, TextStyle } from "react-native";
import { useComputeStyles } from "../../../hooks";

export default function useSvgIconStyles(props: SvgIconProps): TextStyle {
    return useComputeStyles("SvgIcon", { ...props, style: StyleSheet.flatten(props.style) });
}
