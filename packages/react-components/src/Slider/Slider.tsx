import { ChangeEvent } from "react";
import { useFormNotification } from "../Form";
import { SliderProps, SliderStyles } from "./Slider.types";
import { useControlled } from "@peersyst/react-hooks";
import { SliderInput, SliderRail, SliderRoot, SliderTrack } from "./Slider.styles";
import { fsx, cx } from "@peersyst/react-utils";

export default function Slider({
    defaultValue = 0,
    min,
    max,
    step = 1,
    name,
    value: valueProp,
    onChange,
    disabled = false,
    className,
    style,
    railClassName,
    railStyle,
    trackClassName,
    trackStyle,
}: SliderProps): JSX.Element {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChange);
    useFormNotification(name, value);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const numberValue = Number(target.value);
        setValue(Number(numberValue));
    };

    const styleProps: SliderStyles = {
        disabled,
    };

    const percentage = value > max ? "100%" : (value / max) * 100 + "%";

    return (
        <SliderRoot
            {...styleProps}
            className={cx(className, "Slider", disabled && "Disabled")}
            style={fsx(style, styleProps)}
        >
            <SliderRail
                className={cx(railClassName, "SliderRail", disabled && "Disabled")}
                style={fsx(railStyle, styleProps)}
            />
            <SliderTrack
                style={{ width: percentage, ...fsx(trackStyle, styleProps) }}
                className={cx(trackClassName, "SliderTrack", disabled && "Disabled")}
            />
            <SliderInput
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className={cx("SliderInput", disabled && "Disabled")}
            />
        </SliderRoot>
    );
}
