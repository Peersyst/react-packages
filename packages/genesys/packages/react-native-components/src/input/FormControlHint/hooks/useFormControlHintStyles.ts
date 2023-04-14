import { FormControlHintProps } from "../FormControlHint.types";
import { TextStyle } from "react-native";
import { useComputeStyles } from "../../../hooks";

export default function useFormControlHintStyles(props: FormControlHintProps): TextStyle {
    return useComputeStyles("FormControlHint", props);
}
