import { TextStyle } from "react-native";
import { FormControlErrorProps } from "../FormControlError.types";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";

export default function useFormControlErrorStyles(props: FormControlErrorProps): TextStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("FormControlError");
    const stylesheet = useStylesheet<FormControlErrorProps>("FormControlError");

    const mergedStylesheet = useMergeStylesheets<FormControlErrorProps>(
        stylesheet,
        defaultStyle,
        style,
    );
    return useResolveStylesheet(props, mergedStylesheet);
}
