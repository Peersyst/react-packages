import { CoreFormControlProps, FormControlContextType } from "@peersyst/react-components-core";
import { LabelProps, LabelStyle } from "../../display/Label";
import { TextStyle, ViewStyle } from "react-native";

export type FormControlStateStyle<S> = S & {
    required?: S;
    readonly?: S;
    focused?: S;
    invalid?: S;
    valid?: S;
    disabled?: S;
};

export type FormControlStyle<LabelStyleType, ComponentStyleType> = ViewStyle & {
    label?: FormControlStateStyle<LabelStyleType>;
    component?: FormControlStateStyle<ComponentStyleType>;
    hint?: TextStyle;
    error?: TextStyle;
};

export interface FormControlProps<
    T = any,
    LabelStyleType = LabelStyle,
    ComponentStyleType = ViewStyle,
> extends CoreFormControlProps<
        LabelProps,
        T,
        [style: ComponentStyleType, setFocused: (focused: boolean) => void]
    > {
    defaultStyle?: FormControlStateStyle<ComponentStyleType>;
    style?: FormControlStyle<LabelStyleType, ComponentStyleType>;
    stylesMergeStrategy?: (
        defaultStyle: FormControlStateStyle<ComponentStyleType>,
        style: FormControlStateStyle<ComponentStyleType>,
        context: FormControlContextType,
    ) => ComponentStyleType;
}

export type FormControlledComponentProps<CoreProps, ComponentStyleType = ViewStyle> = CoreProps & {
    style?: FormControlStateStyle<ComponentStyleType>;
};
