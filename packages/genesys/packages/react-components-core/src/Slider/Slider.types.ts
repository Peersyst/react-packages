import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";

export interface CoreSliderProps<LP extends CoreLabelProps = CoreLabelProps>
    extends Omit<
        CoreFormControlledComponentProps<number | number[], LP>,
        "required" | "hideError" | "showValid"
    > {
    /**
     * Min value
     */
    min?: number;
    /**
     * Max value
     */
    max?: number;
    /**
     * Slider step
     */
    step?: number;
}

export interface SliderStyles {
    disabled: boolean;
}
