import { FormControlHintProps } from "../FormControlHint.types";
import { TextStyle } from "react-native";
import {
    useMergeStylesheets,
    useStylesheet,
    useResolveStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";

export default function useFormControlHintStyles(props: FormControlHintProps): TextStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("FormControlHint");
    const stylesheet = useStylesheet<FormControlHintProps>("FormControlHint");

    const mergedStylesheet = useMergeStylesheets<FormControlHintProps>(
        stylesheet,
        defaultStyle,
        style,
    );
    return useResolveStylesheet(props, mergedStylesheet);
}
