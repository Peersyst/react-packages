import { CoreFormControlledComponentProps } from "@peersyst/react-components-core";
import { LabelProps } from "../Label";
import { FormControlledComponentProps } from "../FormControl";

export type CoreColorInputProps = CoreFormControlledComponentProps<string, LabelProps>;

export interface ColorInputProps extends FormControlledComponentProps<CoreColorInputProps> {
    /**
     * Renders text field where the user can enter a color
     */
    showTextField?: boolean;
}

export interface ColorInputRootProps {
    hasLabel: boolean;
}

export interface ColorInputDisplayProps {
    active: boolean;
    disabled: boolean;
}
