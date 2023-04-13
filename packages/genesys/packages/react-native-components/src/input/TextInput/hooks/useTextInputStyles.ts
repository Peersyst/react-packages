import { TextInputProps } from "../TextInput.types";
import { useMergeStylesheets, useStylesheet } from "@peersyst/react-native-styled";

export default function useTextInputStyles(props: TextInputProps): TextInputProps["style"] {
    const { style } = props;

    const stylesheet = useStylesheet<TextInputProps>("TextInput");

    // No need to resolve as TextInput does not manipulate them and FormControl already resolves them
    return useMergeStylesheets<TextInputProps>(stylesheet, style);
}
