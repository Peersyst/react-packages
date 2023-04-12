import { ViewStyle } from "react-native";
import { useGlobalStyles } from "../../../config";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { FormControlProps, FormControlStyle } from "../FormControl.types";
import { LabelStyle } from "../../../display/Label";

export default function useFormControlStyles<
    T = any,
    LabelStyleType = LabelStyle,
    ComponentStyleType = ViewStyle,
>(
    props: FormControlProps<T, LabelStyleType, ComponentStyleType>,
): FormControlStyle<LabelStyleType, ComponentStyleType> {
    const { style } = props;

    const defaultStyle = useGlobalStyles("FormControl");
    // any is safe here as the interface is defined by the function
    const stylesheet = useStylesheet<FormControlProps<any, any, any>>("FormControl");

    const mergedStylesheet = useMergeStylesheets<FormControlProps<any, any, any>>(
        stylesheet,
        defaultStyle,
        style,
    );

    return useResolveStylesheet(props, mergedStylesheet);
}
