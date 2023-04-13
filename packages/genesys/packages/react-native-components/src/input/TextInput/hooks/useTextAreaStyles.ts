import { TextAreaProps } from "../TextInput.types";
import { useMergeStylesheets, useStylesheet } from "@peersyst/react-native-styled";

export default function useTextAreaStyles(props: TextAreaProps): TextAreaProps["style"] {
    const { style } = props;

    const stylesheet = useStylesheet<TextAreaProps>("TextArea");

    // No need to resolve as TextArea does not manipulate them and FormControl already resolves them
    return useMergeStylesheets<TextAreaProps>(stylesheet, style);
}
