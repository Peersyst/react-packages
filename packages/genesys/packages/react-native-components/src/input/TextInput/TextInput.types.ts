import { ReactElement } from "react";
import {
    ColorValue,
    TextInputProps as NativeTextInputProps,
    TextStyle,
    ViewStyle,
} from "react-native";
import { CoreTextInputProps } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";

export interface InputStyle extends TextStyle {
    placeholderColor?: ColorValue;
    highlightColor?: ColorValue;
}
export type TextInputStyle = ViewStyle & {
    input?: InputStyle;
};

export interface InputProps {
    multiline?: boolean;
    numberOfLines?: number;
}

export type TextInputProps = FormControlledComponentProps<CoreTextInputProps, TextInputStyle> &
    Omit<
        NativeTextInputProps,
        | "placeholderTextColor"
        | "selectionColor"
        | "style"
        | "textAlign"
        | "editable"
        | "onChange"
        | "clearButtonMode"
        | "placeholder"
    > & {
        /**
         * Input's prefix
         */
        prefix?: ReactElement;
        /**
         * Input's suffix
         */
        suffix?: ReactElement;
        /**
         * Show text element
         */
        showTextElement?: ReactElement;
        /**
         * Hide text element
         */
        hideTextElement?: ReactElement;
        /**
         * If input is clearable
         */
        clearable?: boolean;
        /**
         * Clear input element
         */
        clearElement?: ReactElement;
    };

export type TextFieldProps = Omit<TextInputProps, "multiline" | "numberOfLines">;
export type TextAreaProps = Omit<
    TextInputProps,
    | "clearable"
    | "clearElement"
    | "secureTextEntry"
    | "showTextElement"
    | "hideTextElement"
    | "multiline"
>;
