import { useComputeStyles } from "../../../hooks";
import { CodeFieldProps } from "../CodeField.types";

export default function useTextFieldStyles(props: CodeFieldProps): CodeFieldProps["style"] {
    // No need to resolve as CodeField does not manipulate them and FormControl already resolves them
    return useComputeStyles("CodeField", props, undefined, { bypass: true });
}
