import { FormControlContextType } from "@peersyst/react-components-core";
import { CodeFieldProps } from "../CodeField.types";

export interface CodeInputsProps
    extends Pick<CodeFieldProps, "digits" | "gap" | "onBlur" | "onFocus" | "placeholder"> {
    value: string;
    setValue: (value: string) => void;
    context: FormControlContextType;
}
