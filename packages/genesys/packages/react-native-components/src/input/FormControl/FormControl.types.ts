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
    /**
     * @deprecated
     */
    defaultStyle?: FormControlStateStyle<ComponentStyleType>;
    /**
     * @deprecated
     */
    globalStyle?: FormControlStateStyle<ComponentStyleType>;
    style?: FormControlStyle<LabelStyleType, ComponentStyleType>;
    /**
     * @deprecated
     */
    stylesMergeStrategy?: (
        defaultStyle: FormControlStateStyle<Partial<ComponentStyleType>>,
        globalStyles: FormControlStateStyle<Partial<ComponentStyleType>>,
        style: FormControlStateStyle<Partial<ComponentStyleType>>,
        context: FormControlContextType,
    ) => ComponentStyleType;
    onPress?: () => void;
}

export type FormControlledComponentProps<
    CoreProps,
    ComponentStyleType = ViewStyle,
    LabelStyleType = LabelStyle,
> = CoreProps & {
    style?: FormControlStyle<LabelStyleType, ComponentStyleType>;
};
