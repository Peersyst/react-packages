import { CoreFormControlledComponentProps } from "@peersyst/react-components-core";
import { LabelProps } from "../Label";
import { FormControlledComponentProps } from "../FormControl";
import { TextFieldProps } from "../TextField";
import { ComponentType } from "react";

export type ColorInputTextFieldProps<TFP extends TextFieldProps> = Omit<
    TFP,
    | "value"
    | "onChange"
    | "defaultValue"
    | "hideError"
    | "required"
    | "label"
    | "LabelProps"
    | "Label"
    | "disabled"
    | "readonly"
    | "showValid"
    | "name"
    | "onValidated"
>;

export type CoreColorInputProps = CoreFormControlledComponentProps<string, LabelProps>;

export interface ColorInputProps<TFP extends TextFieldProps = TextFieldProps>
    extends FormControlledComponentProps<CoreColorInputProps> {
    /**
     * Renders text field where the user can enter a color
     */
    showTextField?: boolean;
    /**
     * ColorInput TextField props
     */
    TextFieldProps?: ColorInputTextFieldProps<TFP>;
    /**
     * Custom TextField component
     */
    TextField?: ComponentType<TFP>;
}

export interface ColorInputRootProps {
    hasLabel: boolean;
}

export interface ColorInputDisplayProps {
    active: boolean;
    disabled: boolean;
}
