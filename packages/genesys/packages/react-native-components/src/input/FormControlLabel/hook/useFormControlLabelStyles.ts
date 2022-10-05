import { FormControlLabelStyle } from "../FormControlLabel.types";
import { FormControlContextType } from "@peersyst/react-components-core";
import { LabelStyle } from "../../../display/Label";
import useDefaultFormControlLabelStyles from "./useDefaultFormControlLabelStyles";
import { useGlobalStyles } from "../../../config";

export default function (
    {
        required: { label: requiredLabelStyle, ...requiredStyle } = {},
        invalid: { label: invalidLabelStyle, ...invalidStyle } = {},
        disabled: { label: disabledLabelStyle, ...disabledStyle } = {},
        readonly: { label: readonlyLabelStyle, ...readonlyStyle } = {},
        focused: { label: focusedLabelStyle, ...focusedStyle } = {},
        valid: { label: validLabelStyle, ...validStyle } = {},
        label: labelStyle,
        ...style
    }: FormControlLabelStyle,
    { required, invalid, disabled, readonly, focused, valid }: FormControlContextType,
): LabelStyle {
    const {
        required: { label: requiredLabelDefaultStyle, ...requiredDefaultStyle } = {},
        invalid: { label: invalidLabelDefaultStyle, ...invalidDefaultStyle } = {},
        disabled: { label: disabledLabelDefaultStyle, ...disabledDefaultStyle } = {},
        readonly: { label: readonlyLabelDefaultStyle, ...readonlyDefaultStyle } = {},
        focused: { label: focusedLabelDefaultStyle, ...focusedDefaultStyle } = {},
        valid: { label: validLabelDefaultStyle, ...validDefaultStyle } = {},
        label: labelDefaultStyle,
        ...defaultStyle
    } = useDefaultFormControlLabelStyles();
    const {
        required: { label: requiredLabelGlobalStyle = {}, ...requiredGlobalStyle } = {},
        invalid: { label: invalidLabelGlobalStyle = {}, ...invalidGlobalStyle } = {},
        disabled: { label: disabledLabelGlobalStyle = {}, ...disabledGlobalStyle } = {},
        readonly: { label: readonlyLabelGlobalStyle = {}, ...readonlyGlobalStyle } = {},
        focused: { label: focusedLabelGlobalStyle = {}, ...focusedGlobalStyle } = {},
        valid: { label: validLabelGlobalStyle = {}, ...validGlobalStyle } = {},
        label: labelGlobalStyle,
        ...globalStyle
    } = useGlobalStyles("FormControlLabel");

    const finalLabelStyle = {
        ...labelDefaultStyle,
        ...labelGlobalStyle,
        ...labelStyle,
        ...(required && {
            ...requiredLabelDefaultStyle,
            ...requiredLabelGlobalStyle,
            ...requiredLabelStyle,
        }),
        ...(focused && {
            ...focusedLabelDefaultStyle,
            ...focusedLabelGlobalStyle,
            ...focusedLabelStyle,
        }),
        ...(readonly && {
            ...readonlyLabelDefaultStyle,
            ...readonlyLabelGlobalStyle,
            ...readonlyLabelStyle,
        }),
        ...(invalid && {
            ...invalidLabelDefaultStyle,
            ...invalidLabelGlobalStyle,
            ...invalidLabelStyle,
        }),
        ...(valid && {
            ...validLabelDefaultStyle,
            ...validLabelGlobalStyle,
            ...validLabelStyle,
        }),
        ...(disabled && {
            ...disabledLabelDefaultStyle,
            ...disabledLabelGlobalStyle,
            ...disabledLabelStyle,
        }),
    };

    const finalStyle = {
        ...defaultStyle,
        ...globalStyle,
        ...style,
        ...(required && {
            ...requiredDefaultStyle,
            ...requiredGlobalStyle,
            ...requiredStyle,
        }),
        ...(focused && {
            ...focusedDefaultStyle,
            ...focusedGlobalStyle,
            ...focusedStyle,
        }),
        ...(readonly && {
            ...readonlyDefaultStyle,
            ...readonlyGlobalStyle,
            ...readonlyStyle,
        }),
        ...(invalid && {
            ...invalidDefaultStyle,
            ...invalidGlobalStyle,
            ...invalidStyle,
        }),
        ...(valid && {
            ...validDefaultStyle,
            ...validGlobalStyle,
            ...validStyle,
        }),
        ...(disabled && {
            ...disabledDefaultStyle,
            ...disabledGlobalStyle,
            ...disabledStyle,
        }),
    };

    return { label: finalLabelStyle, ...finalStyle };
}
