import { useComputeStyles } from "../../../hooks";
import { TextAreaProps } from "../TextInput.types";

export default function useTextAreaStyles(props: TextAreaProps): TextAreaProps["style"] {
    // No need to resolve as TextArea does not manipulate them and FormControl already resolves them
    return useComputeStyles("TextArea", props, undefined, { bypass: true });
}
