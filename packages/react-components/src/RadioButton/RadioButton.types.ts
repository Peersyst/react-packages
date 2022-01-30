import { ReactElement } from "react";
import { PropsStyle } from "@peersyst/react-types";

export interface RadioButtonProps {
    /**
     * Name for the radio button
     */
    name?: string;
    /**
     * Radio button checked by default
     */
    defaultChecked?: boolean;
    /**
     * RadioButton value
     */
    value?: boolean;
    /**
     * OnChange handler
     */
    onChange?: (checked: boolean) => any;
    /**
     * Validator that ensures RadioButton is checked
     */
    required?: boolean;
    /**
     * RadioButton disabled flag
     */
    disabled?: boolean;
    /**
     * RadioButton className
     */
    className?: string;
    /**
     * RadioButton style
     */
    style?: PropsStyle<RadioButtonStyleProps>;
    /**
     * RadioButton icon
     */
    icon?: ReactElement;
    /**
     * RadioButton checked icon
     */
    checkedIcon?: ReactElement;
}

export interface RadioButtonStyleProps {
    checked: boolean;
    disabled: boolean;
}
