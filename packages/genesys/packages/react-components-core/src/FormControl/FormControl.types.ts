import { ComponentType, ReactNode } from "react";
import { CoreLabelProps } from "../Label";

export interface FormControlProps<T = any> {
    /**
     * Name of the component in the form context
     */
    name?: string;
    /**
     * Default value
     */
    defaultValue: T;
    /**
     * Controlled value
     */
    value?: T;
    /**
     * onChange handler
     */
    onChange?: (v: T) => any;
    /**
     * Component's own validation
     */
    validation?: (v: T) => [boolean, string | undefined];
    /**
     * Required flag that triggers invalid_not_null error
     */
    required?: boolean;
    /**
     * Disabled flag
     */
    disabled?: boolean;
    /**
     * Readonly flag
     */
    readonly?: boolean;
    /**
     * Hides errors
     */
    hideError?: boolean;
    /**
     * Shows valid styles when valid
     */
    showValid?: boolean;
    /**
     * On invalid handler
     */
    onValidated?: (valid: boolean, error?: string) => void;
    /**
     * On focus handler
     */
    onFocus?: () => void;
    /**
     * On blur handler
     */
    onBlur?: () => void;
    /**
     * The lower FormControl implementation
     */
    children: (
        value: T,
        setValue: (v: T) => any,
        setFocused: (focused: boolean) => any,
        error?: string,
    ) => ReactNode;
}

export type ChildrenParameters<T> = [
    value: T,
    setValue: (v: T) => any,
    context: FormControlContextType,
];

export interface CoreFormControlProps<
    LP extends { label: string } = any,
    T = any,
    ExtraChildrenParameters extends [...args: any] = [],
> extends Omit<FormControlProps<T>, "children"> {
    /**
     * Label component or [Label component, label props] for the label
     */
    Label: ComponentType<LP> | [ComponentType<LP>, Omit<LP, "label">];
    /**
     * Label content
     */
    label?: string;
    /**
     * Hint content
     */
    hint?: string;
    /**
     * The form controlled component
     */
    children: (...args: [...ChildrenParameters<T>, ...ExtraChildrenParameters]) => ReactNode;
}

export type BaseCoreFormControlledComponentProps<
    T,
    LP extends CoreLabelProps = CoreLabelProps,
> = Pick<
    CoreFormControlProps<LP, T>,
    Exclude<keyof CoreFormControlProps, "children" | "Label" | "validation" | "defaultValue">
>;
export type CoreFormControlledComponentProps<
    T,
    LP extends CoreLabelProps = CoreLabelProps,
> = BaseCoreFormControlledComponentProps<T, LP> & {
    /**
     * Default value
     */
    defaultValue?: T;
    /**
     * FormControl's Label props
     */
    LabelProps?: Omit<LP, "label">;
    /**
     * FormControl's custom Label
     */
    Label?: ComponentType<LP>;
};

export type FormControlContextType = {
    required: boolean;
    invalid: boolean;
    valid: boolean;
    disabled: boolean;
    readonly: boolean;
    focused: boolean;
};
