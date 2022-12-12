import { CoreRadioButtonProps } from "@peersyst/react-components-core";
import { BaseBooleanStyle } from "../../utils";
import { LabelProps } from "../../display/Label";
import { FormControlledComponentProps, FormControlStateStyle } from "../FormControl";
import { IconButtonStyle } from "../IconButton";

export type RadioButtonStyle = FormControlStateStyle<RadioButtonCoreStyle>;

export type RadioButtonCoreStyle = BaseBooleanStyle<RadioButtonBaseStyle>;

export type RadioButtonBaseStyle = IconButtonStyle;

export type RadioButtonProps = FormControlledComponentProps<
    CoreRadioButtonProps<LabelProps>,
    RadioButtonCoreStyle
>;
