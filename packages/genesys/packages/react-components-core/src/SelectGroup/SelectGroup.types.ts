import { ReactElement } from "react";
import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";
import { SelectorProps } from "./Selector/Selector.types";

export type SelectorType = "radio" | "checkbox" | "switch";
export type SelectorDirection = "row" | "column";

export interface SelectorOption<T> {
    /**
     * label for the Selector (passed as a label prop to the FormControl of the Selector)
     */
    label: string;
    /**
     * value for the SelectGroup (not passed as a value prop to the FormControl of the Selector)
     * because the value props of the Seoector will be isSelected
     */
    value: T;
}

export type CoreSelectGroupProps<
    T,
    CustomSelectorProps,
    LP extends CoreLabelProps,
    D extends SelectorDirection = "column",
    Multiple extends boolean = false,
> = CoreFormControlledComponentProps<Multiple extends true ? T[] : T, LP> & {
    /**
     * Make the selection multiple
     */
    multiple?: Multiple;
    /**
     * SelectGroup with default Selector component
     */
    options?: SelectorOption<T>[];
    /**
     * Add custom Selector component
     */
    children?: ReactElement<CustomSelectorProps>[];
    /**
     * Selector type
     */
    type?: SelectorType;
    /**
     * Selector direction
     */
    direction?: D;
};

export interface SelectGroupContextType<T> {
    value: T | T[];
    multiple: boolean;
    readonly: boolean;
    disabled: boolean;
    setValue: (value: T | T[]) => void;
}

export interface SelectorChildrenContext<T>
    extends Omit<SelectGroupContextType<T>, "setValue" | "value"> {
    isSelected: boolean;
    /**
     * Current selected values of the SelectGroup
     */
    selected: T | T[];
    /**
     * Set the current selected value/s of the SelectGroup
     */
    setSelected: () => void;
}

export type CoreSelectorProps<T, LP extends CoreLabelProps = CoreLabelProps> = Omit<
    SelectorProps<T>,
    "children"
> & {
    /**
     * Selector type
     */
    type?: SelectorType;
} & Pick<CoreFormControlledComponentProps<T, LP>, "Label" | "LabelProps" | "label">;
