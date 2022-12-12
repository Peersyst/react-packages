import { FormControlContextType } from "@peersyst/react-components-core";
import { FormControlStateStyle } from "../input/FormControl";

export type BaseBooleanStyle<S, AS = S> = S & {
    active?: AS;
};

export type BaseStyle<S, AS = S> = FormControlStateStyle<BaseBooleanStyle<S, AS>>;
export type BasePartialStyle<S, AS = S> = FormControlStateStyle<Partial<BaseBooleanStyle<S, AS>>>;

export default function <S, AS = S>(
    {
        invalid: { active: defaultInvalidActiveStyle, ...defaultInvalidInactiveStyle } = {},
        valid: { active: defaultValidActiveStyle, ...defaultValidInactiveStyle } = {},
        disabled: { active: defaultDisabledActiveStyle, ...defaultDisabledInactiveStyle } = {},
        focused: { active: defaultFocusedActiveStyle, ...defaultFocusedInactiveStyle } = {},
        readonly: { active: defaultReadonlyActiveStyle, ...defaultReadonlyInactiveStyle } = {},
        required: { active: defaultRequiredActiveStyle, ...defaultRequiredInactiveStyle } = {},
        active: defaultActiveStyle,
        ...defaultInactiveStyle
    }: BasePartialStyle<S, AS>,
    {
        active: globalActiveStyle,
        invalid: { active: globalInvalidActiveStyle, ...globalInvalidInactiveStyle } = {},
        valid: { active: globalValidActiveStyle, ...globalValidInactiveStyle } = {},
        disabled: { active: globalDisabledActiveStyle, ...globalDisabledInactiveStyle } = {},
        focused: { active: globalFocusedActiveStyle, ...globalFocusedInactiveStyle } = {},
        readonly: { active: globalReadonlyActiveStyle, ...globalReadonlyInactiveStyle } = {},
        required: { active: globalRequiredActiveStyle, ...globalRequiredInactiveStyle } = {},
        ...globalInactiveStyle
    }: BasePartialStyle<S, AS>,
    {
        invalid: { active: styleInvalidActiveStyle, ...styleInvalidInactiveStyle } = {},
        valid: { active: styleValidActiveStyle, ...styleValidInactiveStyle } = {},
        disabled: { active: styleDisabledActiveStyle, ...styleDisabledInactiveStyle } = {},
        focused: { active: styleFocusedActiveStyle, ...styleFocusedInactiveStyle } = {},
        readonly: { active: styleReadonlyActiveStyle, ...styleReadonlyInactiveStyle } = {},
        required: { active: styleRequiredActiveStyle, ...styleRequiredInactiveStyle } = {},
        active: styleActiveStyle,
        ...styleInactiveStyle
    }: BasePartialStyle<S, AS>,
    { readonly, required, focused, invalid, valid, disabled }: FormControlContextType,
): BaseBooleanStyle<S, AS> {
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
    } as AS;

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
    } as S;

    return {
        ...style,
        active: activeStyle,
    };
}
