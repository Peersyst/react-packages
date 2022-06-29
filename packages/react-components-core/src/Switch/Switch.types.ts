import { CoreLabelProps } from "../Label";
import { CoreFormControlledComponentProps } from "../FormControl";
import { ReactElement } from "react";

export interface CoreSwitchProps<LP extends CoreLabelProps = CoreLabelProps>
    extends CoreFormControlledComponentProps<boolean, LP> {
    /**
     * Switch elements
     */
    children?: [ReactElement, ReactElement];
}
