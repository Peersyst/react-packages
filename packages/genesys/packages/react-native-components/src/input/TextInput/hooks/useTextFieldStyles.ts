import { useComputeStyles } from "../../../hooks";
import { TextFieldProps } from "../TextInput.types";

export default function useTextFieldStyles(props: TextFieldProps): TextFieldProps["style"] {
    // No need to resolve as TextField does not manipulate them and FormControl already resolves them
    return useComputeStyles("TextField", props, undefined, { bypass: true });
}
