import { PropsStyle } from "../utils/types";

export interface SliderProps {
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
    defaultValue?: number;
    /**
     * Slider controlled value
     */
    value?: number;
    /**
     * onChange handler
     */
    onChange?: (value: number) => any;
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
    style?: PropsStyle<SliderStyles>;
    /**
     * Slider rail className
     */
    railClassName?: string;
    /**
     * Slider rail style
     */
    railStyle?: PropsStyle<SliderStyles>;
    /**
     * Slider track className
     */
    trackClassName?: string;
    /**
     * Slider track style
     */
    trackStyle?: PropsStyle<SliderStyles>;
}

export interface SliderStyles {
    disabled: boolean;
}
