import { CoreFormControlledComponentProps } from "../FormControl";
import { ReactElement } from "react";
import { CoreLabelProps } from "../Label";

export interface CoreRadioButtonProps<LP extends CoreLabelProps = CoreLabelProps>
    extends CoreFormControlledComponentProps<boolean, LP> {
    /**
     * RadioButton icon
     */
    icon?: ReactElement;
    /**
     * RadioButton checked icon
     */
    checkedIcon?: ReactElement;
}
