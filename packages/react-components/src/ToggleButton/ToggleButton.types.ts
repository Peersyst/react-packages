import { ButtonProps } from "../Button";

export interface ToggleButtonProps extends Omit<ButtonProps, "onChange"> {
    /**
     * Name of the ToggleButton in a form
     */
    name?: string;
    /**
     * If button is selected by default
     */
    defaultSelected?: boolean;
    /**
     * If button is selected
     */
    selected?: boolean;
    /**
     * onChange handler
     */
    onChange?: (selected: boolean) => void;
}
