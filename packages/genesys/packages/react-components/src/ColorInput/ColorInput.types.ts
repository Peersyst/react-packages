import { CoreFormControlledComponentProps } from "@peersyst/react-components-core";
import { LabelProps } from "../Label";
import { FormControlledComponentProps } from "../FormControl";
import { TextFieldProps } from "../TextField";
import { ComponentType } from "react";
import { ColorValidatorType } from "@peersyst/react-components-core";
import Color from "color";

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

export type CoreColorInputProps = CoreFormControlledComponentProps<Color, LabelProps>;

export interface ColorInputProps<TFP extends TextFieldProps = TextFieldProps>
    extends FormControlledComponentProps<CoreColorInputProps> {
    /**
     * Color type/s
     */
    colorType?: Exclude<ColorValidatorType, true>;
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
