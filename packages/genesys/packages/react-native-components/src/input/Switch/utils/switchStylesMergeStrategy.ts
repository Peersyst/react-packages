import { FormControlContextType } from "@peersyst/react-components-core";
import { SwitchCoreStyle, SwitchPartialStyle } from "../Switch.types";

export default function (
    {
        invalid: { active: defaultInvalidActiveStyle, ...defaultInvalidInactiveStyle } = {},
        valid: { active: defaultValidActiveStyle, ...defaultValidInactiveStyle } = {},
        disabled: { active: defaultDisabledActiveStyle, ...defaultDisabledInactiveStyle } = {},
        focused: { active: defaultFocusedActiveStyle, ...defaultFocusedInactiveStyle } = {},
        readonly: { active: defaultReadonlyActiveStyle, ...defaultReadonlyInactiveStyle } = {},
        required: { active: defaultRequiredActiveStyle, ...defaultRequiredInactiveStyle } = {},
        active: defaultActiveStyle,
        ...defaultInactiveStyle
    }: SwitchPartialStyle,
    {
        active: globalActiveStyle,
        invalid: { active: globalInvalidActiveStyle, ...globalInvalidInactiveStyle } = {},
        valid: { active: globalValidActiveStyle, ...globalValidInactiveStyle } = {},
        disabled: { active: globalDisabledActiveStyle, ...globalDisabledInactiveStyle } = {},
        focused: { active: globalFocusedActiveStyle, ...globalFocusedInactiveStyle } = {},
        readonly: { active: globalReadonlyActiveStyle, ...globalReadonlyInactiveStyle } = {},
        required: { active: globalRequiredActiveStyle, ...globalRequiredInactiveStyle } = {},
        ...globalInactiveStyle
    }: SwitchPartialStyle,
    {
        invalid: { active: styleInvalidActiveStyle, ...styleInvalidInactiveStyle } = {},
        valid: { active: styleValidActiveStyle, ...styleValidInactiveStyle } = {},
        disabled: { active: styleDisabledActiveStyle, ...styleDisabledInactiveStyle } = {},
        focused: { active: styleFocusedActiveStyle, ...styleFocusedInactiveStyle } = {},
        readonly: { active: styleReadonlyActiveStyle, ...styleReadonlyInactiveStyle } = {},
        required: { active: styleRequiredActiveStyle, ...styleRequiredInactiveStyle } = {},
        active: styleActiveStyle,
        ...styleInactiveStyle
    }: SwitchPartialStyle,
    { readonly, required, focused, invalid, valid, disabled }: FormControlContextType,
): SwitchCoreStyle {
    const activeStyle = {
        ...defaultActiveStyle,
        ...globalActiveStyle,
        ...styleActiveStyle,
        ...(required && {
            ...defaultRequiredActiveStyle,
            ...globalRequiredActiveStyle,
            ...styleRequiredActiveStyle,
        }),
        ...(focused && {
            ...defaultFocusedActiveStyle,
            ...globalFocusedActiveStyle,
            ...styleFocusedActiveStyle,
        }),
        ...(readonly && {
            ...defaultReadonlyActiveStyle,
            ...globalReadonlyActiveStyle,
            ...styleReadonlyActiveStyle,
        }),
        ...(invalid && {
            ...defaultInvalidActiveStyle,
            ...globalInvalidActiveStyle,
            ...styleInvalidActiveStyle,
        }),
        ...(valid && {
            ...defaultValidActiveStyle,
            ...globalValidActiveStyle,
            ...styleValidActiveStyle,
        }),
        ...(disabled && {
            ...defaultDisabledActiveStyle,
            ...globalDisabledActiveStyle,
            ...styleDisabledActiveStyle,
        }),
    };

    const style = {
        ...defaultInactiveStyle,
        ...globalInactiveStyle,
        ...styleInactiveStyle,
        ...(required && {
            ...defaultRequiredInactiveStyle,
            ...globalRequiredInactiveStyle,
            ...styleRequiredInactiveStyle,
        }),
        ...(focused && {
            ...defaultFocusedInactiveStyle,
            ...globalFocusedInactiveStyle,
            ...styleFocusedInactiveStyle,
        }),
        ...(readonly && {
            ...defaultReadonlyInactiveStyle,
            ...globalReadonlyInactiveStyle,
            ...styleReadonlyInactiveStyle,
        }),
        ...(invalid && {
            ...defaultInvalidInactiveStyle,
            ...globalInvalidInactiveStyle,
            ...styleInvalidInactiveStyle,
        }),
        ...(valid && {
            ...defaultValidInactiveStyle,
            ...globalValidInactiveStyle,
            ...styleValidInactiveStyle,
        }),
        ...(disabled && {
            ...defaultDisabledInactiveStyle,
            ...globalDisabledInactiveStyle,
            ...styleDisabledInactiveStyle,
        }),
    };

    return {
        ...style,
        active: activeStyle,
    };
}
