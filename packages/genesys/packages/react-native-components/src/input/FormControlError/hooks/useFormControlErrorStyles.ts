import { TextStyle } from "react-native";
import { FormControlErrorProps } from "../FormControlError.types";
import { useComputeStyles } from "../../../hooks";

export default function useFormControlErrorStyles(props: FormControlErrorProps): TextStyle {
    return useComputeStyles("FormControlError", props);
}
