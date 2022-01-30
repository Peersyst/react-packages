import { ComponentType, CSSProperties, ReactElement, ReactNode } from "react";
import { SelectItem } from "./SelectItem";
import { PropsStyle } from "@peersyst/react-types";

export interface DropdownComponentProps {
    open?: boolean;
}

export interface DisplayStylesProps {
    open: boolean;
    disabled: boolean;
}
export interface SelectProps {
    /**
     * Name of Select in the form
     */
    name?: string;
    /**
     * Make dropdown expandable instead of absolutely positioned
     */
    expandable?: boolean;
    /**
     * An option must be selected
     */
    required?: boolean;
    /**
     * Make the selection multiple
     */
    multiple?: boolean;
    /**
     * Default value
     */
    defaultValue?: unknown | unknown[];
    /**
     * Select value
     */
    value?: unknown | unknown[];
    /**
     * OnChange handler
     */
    onChange?: (value: unknown | unknown[]) => unknown;
    /**
     * Placeholder
     */
    placeholder?: ReactNode;
    /**
     * DropdownComponent, which can accept an "open" prop
     */
    DropdownComponent?: ComponentType<DropdownComponentProps>;
    /**
     * Customize how display renders selected options
     */
    renderValue?: (val: ReactNode | ReactNode[]) => ReactNode;
    /**
     * If SelectMenu should open on mount
     */
    autoFocus?: boolean;
    /**
     * Disabled
     */
    disabled?: boolean;
    /**
     * Readonly
     */
    readonly?: boolean;
    /**
     * Display className
     */
    displayClassName?: string;
    /**
     * Display style
     */
    displayStyle?: PropsStyle<DisplayStylesProps>;
    /**
     * Menu className
     */
    menuClassName?: string;
    /**
     * Menu style
     */
    menuStyle?: CSSProperties;
    /**
     * Select options
     */
    children?: ReactElement<typeof SelectItem> | ReactElement<typeof SelectItem>[];
}

export interface SelectDisplayStyles {
    open: boolean;
    disabled: boolean;
    readonly: boolean;
}
