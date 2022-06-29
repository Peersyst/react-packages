import { ChangeEvent } from "react";
import { SliderProps } from "./Slider.types";
import { SliderInput, SliderRail, SliderRoot, SliderTrack } from "./Slider.styles";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { SliderStyles } from "@peersyst/react-components-core";

export default function Slider({
    min,
    max,
    defaultValue = min,
    step = 1,
    disabled = false,
    LabelProps = {},
    Label = FormControlLabel,
    ...rest
}: SliderProps): JSX.Element {
    const styleProps: SliderStyles = {
        disabled,
    };

    return (
        <FormControl<number>
            Label={[Label, LabelProps]}
            defaultValue={defaultValue}
            disabled={disabled}
            {...rest}
        >
            {(value, setValue) => {
                const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
                    const numberValue = Number(target.value);
                    setValue(Number(numberValue));
                };

                const percentage = value > max ? "100%" : (value / max) * 100 + "%";

                return (
                    <SliderRoot {...styleProps} className={cx("Slider", disabled && "Disabled")}>
                        <SliderRail className={cx("SliderRail", disabled && "Disabled")} />
                        <SliderTrack
                            style={{ width: percentage }}
                            className={cx("SliderTrack", disabled && "Disabled")}
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
            }}
        </FormControl>
    );
}
