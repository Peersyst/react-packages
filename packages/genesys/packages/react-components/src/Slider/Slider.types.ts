import { SliderUnstyledOwnerState, SliderUnstyledOwnProps } from "./SliderUnstyled";
import { OverridableStringUnion } from "@peersyst/react-types";
import { FormControlledComponentProps } from "../FormControl";
import { CoreSliderProps } from "@peersyst/react-components-core";
import { LabelProps } from "../Label";

export type SliderProps = FormControlledComponentProps<CoreSliderProps<LabelProps>> &
    Omit<
        SliderUnstyledOwnProps,
        "components" | "componentsProps" | "classes" | "onChange" | "onChangeCommitted"
    > & {
        /**
         * Slider size
         */
        size?: SliderSize;
    };

export interface SliderSizeOverrides {}
export type SliderSize = OverridableStringUnion<"sm" | "md", SliderSizeOverrides>;

export type SliderOwnerState = SliderUnstyledOwnerState & { size: SliderSize };

export interface SliderRootProps {
    ownerState: SliderOwnerState;
    marked: boolean;
}

export interface SliderRailProps {
    ownerState: SliderOwnerState;
}

export interface SliderTrackProps {
    ownerState: SliderOwnerState;
}

export interface SliderThumbProps {
    ownerState: SliderOwnerState;
}

export interface SliderValueLabelProps {
    ownerState: SliderOwnerState;
}

export interface SliderMarkProps {
    ownerState: SliderOwnerState;
    markActive: boolean;
}

export interface SliderMarkLabelProps {
    ownerState: SliderOwnerState;
    markLabelActive: boolean;
}
