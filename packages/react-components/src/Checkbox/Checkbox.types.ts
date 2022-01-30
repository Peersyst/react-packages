import { ReactElement } from "react";
import { PropsStyle } from "@peersyst/react-types";

export interface CheckboxProps {
    /**
     * Name for the checkbox
     */
    name?: string;
    /**
     * Checkbox checked by default
     */
    defaultChecked?: boolean;
    /**
     * Checkbox value
     */
    value?: boolean;
    /**
     * OnChange handler
     */
    onChange?: (checked: boolean) => unknown;
    /**
     * Validator that ensures Checkbox is checked
     */
    required?: boolean;
    /**
     * Checkbox disabled flag
     */
    disabled?: boolean;
    /**
     * Checkbox className
     */
    className?: string;
    /**
     * Checkbox style
     */
    style?: PropsStyle<CheckboxStyleProps>;
    /**
     * Checkbox icon
     */
    icon?: ReactElement;
    /**
     * Checkbox checked icon
     */
    checkedIcon?: ReactElement;
}

export interface CheckboxStyleProps {
    checked: boolean;
    disabled: boolean;
}
