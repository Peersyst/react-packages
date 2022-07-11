import { ReactElement } from "react";
import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";

export interface CoreCheckboxProps<LP extends CoreLabelProps = CoreLabelProps>
    extends CoreFormControlledComponentProps<boolean, LP> {
    /**
     * Checkbox icon
     */
    icon?: ReactElement;
    /**
     * Checkbox checked icon
     */
    checkedIcon?: ReactElement;
}
