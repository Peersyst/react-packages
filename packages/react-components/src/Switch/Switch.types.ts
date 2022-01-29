import { ReactElement } from "react";
import { PropsStyle } from "../utils/types";

export interface SwitchProps {
    /**
     * Switch name in the form
     */
    name?: string;
    /**
     * Default value
     */
    defaultValue?: boolean;
    /**
     * Controlled value
     */
    value?: boolean;
    /**
     * onChange handler
     */
    onChange?: (toggled: boolean) => any;
    /**
     * Required flag
     */
    required?: boolean;
    /**
     * Disabled flag
     */
    disabled?: boolean;
    /**
     * Switch className
     */
    className?: string;
    /**
     * Switch style
     */
    style?: PropsStyle<SwitchStyleProps>;
    /**
     * Track className
     */
    trackClassName?: string;
    /**
     * Track style
     */
    trackStyle?: PropsStyle<SwitchStyleProps>;
    /**
     * Thumb className
     */
    thumbClassName?: string;
    /**
     * Thumb style
     */
    thumbStyle?: PropsStyle<SwitchStyleProps>;
    /**
     * Switch elements
     */
    children?: [ReactElement, ReactElement];
}

export interface SwitchStyleProps {
    checked: boolean;
    disabled: boolean;
}
