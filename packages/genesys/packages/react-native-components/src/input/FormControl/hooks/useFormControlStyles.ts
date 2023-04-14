import { ViewStyle } from "react-native";
import { FormControlProps, FormControlStyle } from "../FormControl.types";
import { LabelStyle } from "../../../display/Label";
import { useComputeStyles } from "../../../hooks";

export default function useFormControlStyles<
    T = any,
    LabelStyleType = LabelStyle,
    ComponentStyleType = ViewStyle,
>(
    props: FormControlProps<T, LabelStyleType, ComponentStyleType>,
): FormControlStyle<LabelStyleType, ComponentStyleType> {
    return useComputeStyles("FormControl", props);
}
