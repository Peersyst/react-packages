import { ReactElement } from "react";
import { CoreSelectProps, SelectContextType } from "@peersyst/react-components-core";
import { SelectItemProps } from "./SelectItem";
import { FormControlledComponentProps } from "../FormControl";
import { LabelProps } from "../Label";

export interface SelectDropdownProps {
    open?: boolean;
}

export interface DisplayStylesProps {
    open: boolean;
    disabled: boolean;
}

export type SelectProps<T, Multiple extends boolean = false> = FormControlledComponentProps<
    CoreSelectProps<T, SelectItemProps<T>, LabelProps, Multiple>
> & {
    /**
     * Make dropdown expandable instead of absolutely positioned
     */
    expandable?: boolean;
    /**
     * Dropdown element
     */
    dropdownElement?: ReactElement | false;
};

export type InnerSelectProps<T> = Pick<
    SelectProps<T>,
    "placeholder" | "children" | "options" | "clear" | "open" | "onOpen" | "onClose"
> &
    Required<
        Pick<
            SelectProps<T>,
            "autoFocus" | "disabled" | "readonly" | "renderValue" | "expandable" | "dropdownElement"
        >
    > &
    Pick<SelectContextType<T>, Exclude<keyof SelectContextType<any>, "setOpen">>;

export interface SelectDisplayStyles {
    open: boolean;
    disabled: boolean;
    readonly: boolean;
}
