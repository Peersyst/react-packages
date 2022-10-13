import { CoreFormControlledComponentProps } from "@peersyst/react-components-core";
import { LabelProps } from "../Label";
import { FormControlledComponentProps } from "../FormControl";
import { TextFieldProps } from "../TextField";

export type ColorInputTextFieldProps = Pick<
    TextFieldProps,
    | "clearable"
    | "clearElement"
    | "prefix"
    | "suffix"
    | "autoFocus"
    | "selectOnFocus"
    | "maxLength"
    | "placeholder"
    | "onFocus"
    | "onBlur"
>;

export type CoreColorInputProps = CoreFormControlledComponentProps<string, LabelProps>;

export interface ColorInputProps extends FormControlledComponentProps<CoreColorInputProps> {
    /**
     * Renders text field where the user can enter a color
     */
    showTextField?: boolean;
    /**
     * ColorInput TextField props
     */
    TextFieldProps?: ColorInputTextFieldProps;
}

export interface ColorInputRootProps {
    hasLabel: boolean;
}

export interface ColorInputDisplayProps {
    active: boolean;
    disabled: boolean;
}
