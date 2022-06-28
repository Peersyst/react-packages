import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";

export type RangeSliderValueType = { min: number; max: number };

export interface CoreRangeSliderProps<LP extends CoreLabelProps = CoreLabelProps>
    extends Omit<
        CoreFormControlledComponentProps<RangeSliderValueType, LP>,
        "required" | "hideError" | "showValid"
    > {
    /**
     * Min value
     */
    min: number;
    /**
     * Max value
     */
    max: number;
    /**
     * Slider step
     */
    step?: number;
}

export interface RangeSliderStyles {
    disabled: boolean;
}
