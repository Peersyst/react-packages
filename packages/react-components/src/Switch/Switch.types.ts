import { FormControlledComponentProps } from "../FormControl";
import { CoreSwitchProps } from "@peersyst/react-components-core";
import { LabelProps } from "../Label";

export type SwitchProps = FormControlledComponentProps<CoreSwitchProps<LabelProps>>;

export interface SwitchStyleProps {
    checked: boolean;
    disabled: boolean;
}
