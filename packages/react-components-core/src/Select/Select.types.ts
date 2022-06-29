import { ReactElement, ReactNode } from "react";
import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";

export interface CoreBaseSelectProps<SelectItemProps> {
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

export interface CoreUniqueSelectProps<T, LP extends CoreLabelProps>
    extends CoreFormControlledComponentProps<T, LP> {
    /**
     * Make the selection multiple
     */
    multiple?: false;
}

export interface CoreMultipleSelectProps<T, LP extends CoreLabelProps>
    extends CoreFormControlledComponentProps<T[], LP> {
    /**
     * Make the selection multiple
     */
    multiple: true;
}

export type CoreSelectProps<
    T,
    SelectItemProps,
    LP extends CoreLabelProps = CoreLabelProps,
> = CoreBaseSelectProps<SelectItemProps> &
    (CoreUniqueSelectProps<T, LP> | CoreMultipleSelectProps<T, LP>);

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
