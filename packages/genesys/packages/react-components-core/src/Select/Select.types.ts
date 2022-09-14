import { ReactElement, ReactNode } from "react";
import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";

export interface CoreSelectProps<
    T,
    SelectItemProps,
    LP extends CoreLabelProps,
    Multiple extends boolean = false,
> extends CoreFormControlledComponentProps<Multiple extends true ? T[] : T, LP> {
    /**
     * Make the selection multiple
     */
    multiple?: Multiple;
    /**
     * Placeholder
     */
    placeholder?: ReactNode;
    /**
     * If SelectMenu should open on mount
     */
    autoFocus?: boolean;
    /**
     * Customize how display renders selected options
     */
    renderValue?: (val: ReactNode | ReactNode[]) => ReactNode;
    /**
     * Select options
     */
    children?: ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[];
}

export interface SelectItemChildrenContext<T> {
    isSelected: boolean;
    selected: T | T[];
    setSelected: () => void;
    setOpen: (open: boolean) => void;
    readonly: boolean;
    multiple: boolean;
}

export interface SelectItemProps<T> {
    /**
     * Item value
     */
    value: T;
    /**
     * Item content
     */
    children: (context: SelectItemChildrenContext<T>) => ReactNode;
}

export type CoreSelectItemProps<T> = Omit<SelectItemProps<T>, "children"> & {
    /**
     * Item content
     */
    children: ReactNode;
};
