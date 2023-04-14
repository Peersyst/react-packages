import { useComputeStyles } from "../../../hooks";
import { TextInputProps } from "../TextInput.types";

export default function useTextInputStyles(props: TextInputProps): TextInputProps["style"] {
    // No need to resolve as TextInput does not manipulate them and FormControl already resolves them
    return useComputeStyles("TextInput", props, undefined, { bypass: true });
}
