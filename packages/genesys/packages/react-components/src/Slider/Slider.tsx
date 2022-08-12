import { forwardRef } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { SliderUnstyled } from "./SliderUnstyled";
import {
    SliderMark,
    SliderMarkLabel,
    SliderRail,
    SliderRoot,
    SliderThumb,
    SliderTrack,
    SliderValueLabel,
} from "./Slider.styles";
import { SliderOwnerState, SliderProps } from "./Slider.types";
import clsx from "clsx";
import { capitalize } from "@peersyst/react-utils";
import { FormControlLabel } from "../FormControlLabel";
import { FormControl } from "../FormControl";

const extendUtilityClasses = (ownerState: SliderOwnerState) => {
    const { size, classes = {} } = ownerState;

    return {
        ...classes,
        root: clsx(classes.root, capitalize(size)),
        thumb: clsx(classes.thumb, capitalize(size)),
    };
};

const Slider = forwardRef(function Slider(props: SliderProps, ref) {
    const {
        name,
        min,
        max,
        defaultValue = 0,
        disabled = false,
        LabelProps = {},
        Label = FormControlLabel,
        size = "md",
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText,
        disableSwap = true,
        getAriaLabel,
        getAriaValueText,
        isRtl = false,
        marks,
        orientation,
        scale,
        step,
        tabIndex,
        track,
        valueLabelDisplay,
        valueLabelFormat,
        ...rest
    } = useMergeDefaultProps("Slider", props);

    const ownerState = { ...props, size };

    const classes = extendUtilityClasses(ownerState as SliderOwnerState);

    return (
        <FormControl<number | number[]>
            Label={[Label, LabelProps]}
            defaultValue={defaultValue}
            disabled={disabled}
            name={name}
            {...rest}
        >
            {(value, setValue) => {
                const handleChange = (
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    _event: Event,
                    val: number | number[],
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    _activeThumb: number,
                ) => {
                    setValue(val);
                };

                return (
                    <SliderUnstyled
                        value={value}
                        onChange={handleChange}
                        disabled={disabled}
                        min={min}
                        max={max}
                        aria-label={ariaLabel}
                        aria-labelledby={ariaLabelledBy}
                        aria-valuetext={ariaValueText}
                        disableSwap={disableSwap}
                        getAriaLabel={getAriaLabel}
                        getAriaValueText={getAriaValueText}
                        isRtl={isRtl}
                        marks={marks}
                        name={name}
                        orientation={orientation}
                        scale={scale}
                        step={step}
                        tabIndex={tabIndex}
                        track={track}
                        valueLabelDisplay={valueLabelDisplay}
                        valueLabelFormat={valueLabelFormat}
                        components={{
                            Root: SliderRoot,
                            Rail: SliderRail,
                            Track: SliderTrack,
                            Thumb: SliderThumb,
                            ValueLabel: SliderValueLabel,
                            Mark: SliderMark,
                            MarkLabel: SliderMarkLabel,
                        }}
                        componentsProps={{
                            root: {
                                ...{ ownerState: { size } },
                            },
                            thumb: {
                                ...{ ownerState: { size } },
                            },
                            track: {
                                ...{ ownerState: { size } },
                            },
                            valueLabel: {
                                ...{ ownerState: { size } },
                            },
                        }}
                        classes={classes}
                        ref={ref as any}
                    />
                );
            }}
        </FormControl>
    );
});

export default Slider;
