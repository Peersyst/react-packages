import { FormControlContextType } from "@peersyst/react-components-core";
import { CodeFieldProps, CodeFieldStyle } from "../CodeField.types";

export interface CodeInputsProps
    extends Pick<CodeFieldProps, "digits" | "gap" | "onBlur" | "onFocus" | "placeholder"> {
    value: string;
    setValue: (value: string) => void;
    context: FormControlContextType;
    style: CodeFieldStyle;
    setFocused: (focused: boolean) => void;
}
