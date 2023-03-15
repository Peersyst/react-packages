import { ReactElement } from "react";
import { BaseValidator, FunctionalValidator, Validators } from "../Validators";
import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";
import { ExtraValidators } from "../config";

export interface CoreTextInputProps<LP extends CoreLabelProps = CoreLabelProps>
    extends CoreFormControlledComponentProps<string, LP> {
    /**
     * Input's placeholder
     */
    placeholder?: string;
    /**
     * Input's validators
     */
    validators?: Validators & Partial<ExtraValidators>;
    /**
     * Custom validator
     */
    customValidators?: (BaseValidator | FunctionalValidator)[];
    /**
     * Element shown when input is invalid
     */
    errorElement?: ReactElement | boolean;
    /**
     * Element shown when showValid is true and input is valid
     */
    validElement?: ReactElement | boolean;
    /**
     * Format input value
     */
    format?: (value: string) => string;
}
