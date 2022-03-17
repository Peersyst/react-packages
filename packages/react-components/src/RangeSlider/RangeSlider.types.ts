import { PropsStyle } from "@peersyst/react-types";

export type RangeSliderValueType = { min: number; max: number };

export interface RangeSliderProps {
    /**
     * Name of the Slider in the form
     */
    name?: string;
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
    /**
     * Slider default value
     */
    defaultValue?: RangeSliderValueType;
    /**
     * Slider controlled value
     */
    value?: RangeSliderValueType;
    /**
     * onChange handler
     */
    onChange?: (value: RangeSliderValueType) => any;
    /**
     * Disabled flag
     */
    disabled?: boolean;
    /**
     * Slider className
     */
    className?: string;
    /**
     * Slider style
     */
    style?: PropsStyle<RangeSliderStyles>;
    /**
     * Slider rail className
     */
    railClassName?: string;
    /**
     * Slider rail style
     */
    railStyle?: PropsStyle<RangeSliderStyles>;
    /**
     * Slider track className
     */
    trackClassName?: string;
    /**
     * Slider track style
     */
    trackStyle?: PropsStyle<RangeSliderStyles>;
}

export interface RangeSliderStyles {
    disabled: boolean;
}
