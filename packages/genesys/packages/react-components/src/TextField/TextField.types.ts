import { TextInputProps } from "../TextInput/TextInput.types";
import { ReactElement } from "react";

export type TextFieldProps = TextInputProps & TextFieldOwnProps;

export interface TextFieldOwnProps {
    /**
     * TextField type
     */
    type?: "email" | "number" | "text" | "password" | "tel" | "search";
    /**
     * Show password element
     */
    showPasswordElement?: ReactElement;
    /**
     * Hide password element
     */
    hidePasswordElement?: ReactElement;
    /**
     * If input is clearable
     */
    clearable?: boolean;
    /**
     * Clear input element
     */
    clearElement?: ReactElement;
}
