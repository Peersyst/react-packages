import { ChangeEvent, ReactNode, RefObject, KeyboardEvent, ClipboardEvent } from "react";
import { CoreTextInputProps } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";
import { LabelProps } from "../Label";

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
    onKeyDown?: (event: KeyboardEvent) => void;
    onPaste?: (event: ClipboardEvent) => void;
}

export interface TextInputProps
    extends FormControlledComponentProps<CoreTextInputProps<LabelProps>> {
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
     * onKeyDown handler
     */
    onKeyDown?: (event: KeyboardEvent) => void;
    /**
     * onPaste handler
     */
    onPaste?: (event: ClipboardEvent) => void;
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
    valid: boolean;
    focused: boolean;
    active: boolean;
    disabled: boolean;
    readonly: boolean;
}
