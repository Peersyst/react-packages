import { CoreCodeFieldProps } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";

export interface CodeFieldProps extends FormControlledComponentProps<CoreCodeFieldProps> {
    /**
     * Auto capitalize the input value
     */
    autoCapitalize?: boolean;
}
