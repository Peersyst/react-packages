import { FormControlStateStyle } from "../../FormControl";
import { TextInputStyle } from "../TextInput.types";
import { FormControlContextType } from "@peersyst/react-components-core";

export default function (
    {
        input: defaultInputStyle,
        invalid: { input: defaultInvalidInputStyle, ...defaultInvalidStyle } = {},
        valid: { input: defaultValidInputStyle, ...defaultValidStyle } = {},
        disabled: { input: defaultDisabledInputStyle, ...defaultDisabledStyle } = {},
        focused: { input: defaultFocusedInputStyle, ...defaultFocusedStyle } = {},
        readonly: { input: defaultReadonlyInputStyle, ...defaultReadonlyStyle } = {},
        required: { input: defaultRequiredInputStyle, ...defaultRequiredStyle } = {},
        ...defaultStyle
    }: FormControlStateStyle<TextInputStyle>,
    _globalStyles: FormControlStateStyle<TextInputStyle>,
    {
        invalid: { input: invalidInputStyles, ...invalidStyles } = {},
        valid: { input: validInputStyles, ...validStyles } = {},
        disabled: { input: disabledInputStyles, ...disabledStyles } = {},
        focused: { input: focusedInputStyles, ...focusedStyles } = {},
        readonly: { input: readonlyInputStyles, ...readonlyStyles } = {},
        required: { input: requiredInputStyles, ...requiredStyles } = {},
        input: inputStyles,
        ...styles
    }: FormControlStateStyle<TextInputStyle>,
    { required, invalid, disabled, readonly, focused, valid }: FormControlContextType,
): TextInputStyle {
    const style = { ...defaultStyle, ...styles };
    const invalidStyle = { ...defaultInvalidStyle, ...invalidStyles };
    const validStyle = { ...defaultValidStyle, ...validStyles };
    const disabledStyle = { ...defaultDisabledStyle, ...disabledStyles };
    const focusedStyle = { ...defaultFocusedStyle, ...focusedStyles };
    const readonlyStyle = { ...defaultReadonlyStyle, ...readonlyStyles };
    const requiredStyle = { ...defaultRequiredStyle, ...requiredStyles };

    const inputStyle = { ...defaultInputStyle, ...inputStyles };
    const invalidInputStyle = { ...defaultInvalidInputStyle, ...invalidInputStyles };
    const validInputStyle = { ...defaultValidInputStyle, ...validInputStyles };
    const disabledInputStyle = { ...defaultDisabledInputStyle, ...disabledInputStyles };
    const focusedInputStyle = { ...defaultFocusedInputStyle, ...focusedInputStyles };
    const readonlyInputStyle = { ...defaultReadonlyInputStyle, ...readonlyInputStyles };
    const requiredInputStyle = { ...defaultRequiredInputStyle, ...requiredInputStyles };

    return {
        input: {
            ...inputStyle,
            ...(required && requiredInputStyle),
            ...(focused && focusedInputStyle),
            ...(readonly && readonlyInputStyle),
            ...(invalid && invalidInputStyle),
            ...(valid && validInputStyle),
            ...(disabled && disabledInputStyle),
        },
        ...style,
        ...(required && requiredStyle),
        ...(focused && focusedStyle),
        ...(readonly && readonlyStyle),
        ...(invalid && invalidStyle),
        ...(valid && validStyle),
        ...(disabled && disabledStyle),
    };
}
