import { ChangeEvent } from "react";
import { RangeSliderProps } from "./RangeSlider.types";
import {
    RangeSliderInput,
    RangeSliderRoot,
    RangeSliderRail,
    RangeSliderTrack,
} from "./RangeSlider.styles";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import {
    RangeSliderStyles,
    RangeSliderValueType,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";

export default function RangeSlider(props: RangeSliderProps): JSX.Element {
    const {
        min,
        max,
        defaultValue: defaultValueProp,
        step = 1,
        disabled = false,
        LabelProps = {},
        Label = FormControlLabel,
        ...rest
    } = useMergeDefaultProps("RangeSlider", props);
    const defaultValue = defaultValueProp ?? { min, max };

    const styleProps: RangeSliderStyles = {
        disabled,
    };

    return (
        <FormControl<RangeSliderValueType>
            Label={[Label, LabelProps]}
            defaultValue={defaultValue}
            disabled={disabled}
            {...rest}
        >
            {(value, setValue) => {
                const handleChange =
                    (type: "min" | "max") =>
                    ({ target }: ChangeEvent<HTMLInputElement>) => {
                        const numberValue = Number(target.value);
                        setValue({ ...value, [type]: numberValue });
                    };

                const leftSliderWidth = ((Number(value.max) - Number(min)) / (max - min)) * 100;
                const rightSliderWidth = ((Number(max) - Number(value.min)) / (max - min)) * 100;

                const trackLeftPct = ((value.min - min) / (max - min)) * 100;
                const trackWidthPct = ((value.max - value.min) / (max - min)) * 100;

                return (
                    <RangeSliderRoot
                        {...styleProps}
                        className={cx("RangeSlider", disabled && "Disabled")}
                    >
                        <RangeSliderRail
                            className={cx("RangeSliderRail", disabled && "Disabled")}
                        />
                        <RangeSliderTrack
                            style={{
                                left: `calc(${trackLeftPct}% - 10px)`,
                                width: `calc(${trackWidthPct}% + 10px)`,
                            }}
                            className={cx("RangeSliderTrack", disabled && "Disabled")}
                        />
                        <RangeSliderInput
                            type="range"
                            min={min}
                            max={value.max}
                            step={step}
                            value={value.min}
                            onChange={handleChange("min")}
                            disabled={disabled}
                            style={{
                                left: "-20px",
                                width: `max(20px, calc(${leftSliderWidth}% + 20px))`,
                            }}
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
                            style={{
                                right: "-20px",
                                width: `max(20px, calc(${rightSliderWidth}% + 20px))`,
                            }}
                            className={cx("RangeSliderInput", disabled && "Disabled")}
                        />
                    </RangeSliderRoot>
                );
            }}
        </FormControl>
    );
}
