import { FormControlContextType } from "@peersyst/react-components-core";
import { FormControlStateStyle } from "../FormControl.types";

export default function <S>(
    {
        required: requiredDefaultStyle,
        invalid: invalidDefaultStyle,
        disabled: disabledDefaultStyle,
        readonly: readonlyDefaultStyle,
        focused: focusedDefaultStyle,
        valid: validDefaultStyle,
        ...restDefaultStyle
    }: FormControlStateStyle<S>,
    {
        required: requiredStyle,
        invalid: invalidStyle,
        disabled: disabledStyle,
        readonly: readonlyStyle,
        focused: focusedStyle,
        valid: validStyle,
        ...defaultStyle
    }: FormControlStateStyle<S>,
    { required, invalid, disabled, readonly, focused, valid }: FormControlContextType,
): S {
    const defaultStyles = { ...restDefaultStyle, ...defaultStyle };
    const requiredStyles = required ? { ...requiredDefaultStyle, ...requiredStyle } : {};
    const invalidStyles = invalid ? { ...invalidDefaultStyle, ...invalidStyle } : {};
    const disabledStyles = disabled ? { ...disabledDefaultStyle, ...disabledStyle } : {};
    const readonlyStyles = readonly ? { ...readonlyDefaultStyle, ...readonlyStyle } : {};
    const focusedStyles = focused ? { ...focusedDefaultStyle, ...focusedStyle } : {};
    const validStyles = valid ? { ...validDefaultStyle, ...validStyle } : {};

    return {
        ...defaultStyles,
        ...requiredStyles,
        ...focusedStyles,
        ...readonlyStyles,
        ...invalidStyles,
        ...validStyles,
        ...disabledStyles,
    } as S;
}
