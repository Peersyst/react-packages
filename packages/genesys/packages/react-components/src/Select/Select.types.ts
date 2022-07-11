import { ComponentType } from "react";
import { CoreSelectProps, SelectContextType } from "@peersyst/react-components-core";
import { SelectItemProps } from "./SelectItem";
import { FormControlledComponentProps } from "../FormControl";
import { LabelProps } from "../Label";

export interface DropdownComponentProps {
    open?: boolean;
}

export interface DisplayStylesProps {
    open: boolean;
    disabled: boolean;
}
export type SelectProps<T> = FormControlledComponentProps<
    CoreSelectProps<T, SelectItemProps<T>, LabelProps>
> & {
    /**
     * Make dropdown expandable instead of absolutely positioned
     */
    expandable?: boolean;
    /**
     * DropdownComponent, which can accept an "open" prop
     */
    DropdownComponent?: ComponentType<DropdownComponentProps>;
};

export type InnerSelectProps<T> = Pick<SelectProps<T>, "placeholder" | "children"> &
    Required<
        Pick<
            SelectProps<T>,
            | "autoFocus"
            | "disabled"
            | "readonly"
            | "renderValue"
            | "expandable"
            | "DropdownComponent"
        >
    > &
    Pick<SelectContextType<T>, Exclude<keyof SelectContextType<any>, "setOpen">>;

export interface SelectDisplayStyles {
    open: boolean;
    disabled: boolean;
    readonly: boolean;
}
