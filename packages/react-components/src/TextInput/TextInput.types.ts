import { ChangeEvent, CSSProperties, ReactElement, ReactNode, RefObject } from "react";
import { BaseValidator, Validators } from "./Validators";
import { ExtraValidators } from "../styles";

export interface TextInputContextTypes<HTMLT> {
    ref: RefObject<HTMLT>;
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLT>) => void;
    disabled?: boolean;
    onFocus: () => void;
    onBlur: () => void;
    readOnly?: boolean;
    autoFocus?: boolean;
    autoComplete: "on" | "off";
    autoCorrect: "on" | "off";
    autoCapitalize: "on" | "off";
    spellCheck?: boolean;
    maxLength?: number;
    onSubmit?: () => any;
}

export interface FunctionalValidator {
    validate: (value: string) => boolean;
    message: string;
}

export interface TextInputProps {
    /**
     * Name of the Input
     */
    name?: string;
    /**
     * Default value
     */
    defaultValue?: string;
    /**
     * Controlled value
     */
    value?: string;
    /**
     * onChange handler
     * @param value
     */
    onChange?: (value: string) => any;
    /**
     * Input's placeholder
     */
    placeholder?: string;
    /**
     * Input's validators
     */
    validators?: Validators & Partial<ExtraValidators>;
    /**
     * Custom validator
     */
    customValidators?: (BaseValidator | FunctionalValidator)[];
    /**
     * Input className
     */
    className?: string;
    /**
     * Input style
     */
    style?: CSSProperties;
    /**
     * onInvalid handler
     * @param message
     */
    onInvalid?: (message: string[]) => void;
    /**
     * Input disabled flag
     */
    disabled?: boolean;
    /**
     * Input readonly flag
     */
    readonly?: boolean;
    /**
     * Input's prefix
     */
    prefix?: ReactNode;
    /**
     * Input's suffix
     */
    suffix?: ReactNode;
    /**
     * Input autofocus
     */
    autoFocus?: boolean;
    /**
     * Select content on focus
     */
    selectOnFocus?: boolean;
    /**
     * Autocorrect input
     */
    autoCorrect?: boolean;
    /**
     * Autocomplete input
     */
    autoComplete?: boolean;
    /**
     * Autocapitalize input
     */
    autoCapitalize?: boolean;
    /**
     * Spellcheck input
     */
    spellCheck?: boolean;
    /**
     * Input max length
     */
    maxLength?: number;
    /**
     * onSubmit handler
     */
    onSubmit?: () => void;
    /**
     * Element shown when input is invalid
     */
    errorElement?: ReactElement | boolean;
    /**
     * Show when input is valid
     */
    showValid?: boolean;
    /**
     * Element shown when showValid is true and input is valid
     */
    validElement?: ReactElement;
}

export interface Children<HTMLT> {
    children: (props: TextInputContextTypes<HTMLT>) => ReactNode;
}

export interface HTMLInput {
    focus: () => void;
    select: () => void;
    value: string;
}

export interface TextInputStyles {
    invalid: boolean;
    showValid: boolean;
    focused: boolean;
    active: boolean;
    disabled: boolean;
    readonly: boolean;
}
