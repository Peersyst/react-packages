import { TextFieldProps } from "../TextInput.types";
import { useMergeStylesheets, useStylesheet } from "@peersyst/react-native-styled";

export default function useTextFieldStyles(props: TextFieldProps): TextFieldProps["style"] {
    const { style } = props;

    const stylesheet = useStylesheet<TextFieldProps>("TextField");

    // No need to resolve as TextField does not manipulate them and FormControl already resolves them
    return useMergeStylesheets<TextFieldProps>(stylesheet, style);
}
