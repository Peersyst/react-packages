import { ChangeEvent } from "react";
import { useFormNotification } from "../Form";
import { RangeSliderProps, RangeSliderStyles } from "./RangeSlider.types";
import { useControlled } from "@peersyst/react-hooks";
import {
    RangeSliderInput,
    RangeSliderRoot,
    RangeSliderRail,
    RangeSliderTrack,
} from "./RangeSlider.styles";
import { fsx, cx } from "@peersyst/react-utils";

export default function RangeSlider({
    min,
    max,
    defaultValue = { min, max },
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
}: RangeSliderProps): JSX.Element {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChange);
    useFormNotification(name, value);

    const handleChange =
        (type: "min" | "max") =>
        ({ target }: ChangeEvent<HTMLInputElement>) => {
            const numberValue = Number(target.value);
            setValue({ ...value, [type]: numberValue });
        };

    const styleProps: RangeSliderStyles = {
        disabled,
    };

    const leftSliderWidth = ((Number(value.max) - Number(min)) / (max - min)) * 100;
    const rightSliderWidth = ((Number(max) - Number(value.min)) / (max - min)) * 100;

    const trackLeftPct = ((value.min - min) / (max - min)) * 100;
    const trackWidthPct = ((value.max - value.min) / (max - min)) * 100;

    return (
        <RangeSliderRoot
            {...styleProps}
            className={cx(className, "RangeSlider", disabled && "Disabled")}
            style={fsx(style, styleProps)}
        >
            <RangeSliderRail
                className={cx(railClassName, "RangeSliderRail", disabled && "Disabled")}
                style={fsx(railStyle, styleProps)}
            />
            <RangeSliderTrack
                style={{
                    left: `calc(${trackLeftPct}% - 10px)`,
                    width: `calc(${trackWidthPct}% + 10px)`,
                    ...fsx(trackStyle, styleProps),
                }}
                className={cx(trackClassName, "RangeSliderTrack", disabled && "Disabled")}
            />
            <RangeSliderInput
                type="range"
                min={min}
                max={value.max}
                step={step}
                value={value.min}
                onChange={handleChange("min")}
                disabled={disabled}
                style={{ left: "-20px", width: `max(20px, calc(${leftSliderWidth}% + 20px))` }}
                className={cx("RangeSliderInput", disabled && "Disabled")}
            />
            <RangeSliderInput
                type="range"
                min={value.min}
                max={max}
                step={step}
                value={value.max}
                onChange={handleChange("max")}
                disabled={disabled}
                style={{ right: "-20px", width: `max(20px, calc(${rightSliderWidth}% + 20px))` }}
                className={cx("RangeSliderInput", disabled && "Disabled")}
            />
        </RangeSliderRoot>
    );
}
