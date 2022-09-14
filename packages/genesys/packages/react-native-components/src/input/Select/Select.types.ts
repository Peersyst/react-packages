import { ReactElement, ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { SelectItemProps, SelectItemStyles } from "./SelectItem";
import { FormControlledComponentProps } from "../FormControl";
import { CoreSelectProps, SelectContextType } from "@peersyst/react-components-core";
import { LabelProps } from "../../display/Label";

export interface DisplayStylesProps {
    open: boolean;
    disabled: boolean;
}

export type DisplayStyle = ViewStyle &
    TextStyle & {
        disabled?: ViewStyle & TextStyle;
        readonly?: ViewStyle & TextStyle;
        placeholderColor?: string;
    };

export type SelectStyle = Omit<ViewStyle, "display"> & {
    display?: DisplayStyle;
    menu?: ViewStyle;
    item?: SelectItemStyles;
};

export type SelectProps<T, Multiple extends boolean = false> = FormControlledComponentProps<
    CoreSelectProps<T, SelectItemProps<T>, LabelProps, Multiple>,
    SelectStyle
> & {
    /**
     * SelectDisplay icon
     */
    icon?: ReactElement;
    /**
     * Controlled menu open
     */
    open?: boolean;
    /**
     * onOpen handler
     */
    onOpen?: () => void;
    /**
     * onCLose handler
     */
    onClose?: () => void;
    /**
     * Header element
     */
    header?: ReactNode;
    /**
     * Footer element
     */
    footer?: ReactNode;
    /**
     * Custom display element
     */
    display?: ReactElement;
};

export type InnerSelectProps<T> = Pick<
    SelectProps<T>,
    | "renderValue"
    | "placeholder"
    | "children"
    | "header"
    | "footer"
    | "display"
    | "open"
    | "onOpen"
    | "onClose"
> &
    Required<Pick<SelectProps<T>, "autoFocus" | "disabled" | "readonly" | "icon">> &
    Omit<SelectContextType<T>, "setOpen"> & {
        style?: SelectStyle;
    };
