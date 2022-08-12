import {
    AriaAttributes,
    ChangeEventHandler,
    CSSProperties,
    FocusEventHandler,
    InputHTMLAttributes,
    MouseEventHandler,
    ReactNode,
    Ref,
    SyntheticEvent,
} from "react";

export interface UseSliderParameters {
    "aria-labelledby"?: string;
    defaultValue?: number | number[];
    disabled?: boolean;
    disableSwap?: boolean;
    isRtl?: boolean;
    marks?: boolean | Mark[];
    max?: number;
    min?: number;
    name?: string;
    onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
    onChangeCommitted?: (event: SyntheticEvent | Event, value: number | number[]) => void;
    orientation?: "horizontal" | "vertical";
    ref: Ref<any>;
    scale?: (value: number) => number;
    step?: number | null;
    tabIndex?: number;
    value?: number | number[];
}

export interface Mark {
    value: number;
    label?: ReactNode;
}

export type UseSliderRootSlotOwnProps = {
    onMouseDown: MouseEventHandler;
    ref: Ref<any>;
};

export type UseSliderRootSlotProps<TOther = {}> = Omit<TOther, keyof UseSliderRootSlotOwnProps> &
    UseSliderRootSlotOwnProps;

export type UseSliderThumbSlotOwnProps = {
    onMouseLeave: MouseEventHandler;
    onMouseOver: MouseEventHandler;
};

export type UseSliderThumbSlotProps<TOther = {}> = Omit<TOther, keyof UseSliderThumbSlotOwnProps> &
    UseSliderThumbSlotOwnProps;

export type UseSliderHiddenInputOwnProps = {
    "aria-labelledby"?: string;
    "aria-orientation"?: AriaAttributes["aria-orientation"];
    "aria-valuemax"?: AriaAttributes["aria-valuemax"];
    "aria-valuemin"?: AriaAttributes["aria-valuemin"];
    disabled: boolean;
    name?: string;
    onBlur: FocusEventHandler;
    onChange: ChangeEventHandler;
    onFocus: FocusEventHandler;
    step?: number;
    style: CSSProperties;
    tabIndex?: number;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
};

export type UseSliderHiddenInputProps<TOther = {}> = Omit<
    TOther,
    keyof UseSliderHiddenInputOwnProps
> &
    UseSliderHiddenInputOwnProps;
