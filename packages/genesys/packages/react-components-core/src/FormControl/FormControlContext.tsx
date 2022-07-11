import { createContext } from "react";
import { FormControlContextType } from "./FormControl.types";

export default createContext<FormControlContextType>({
    required: false,
    invalid: false,
    valid: false,
    disabled: false,
    readonly: false,
    focused: false,
});
