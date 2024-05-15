import { CoreSelectorGroupProps, SelectorDirection } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";
import { LabelProps } from "../Label";
import { RowProps } from "../Row";

export type SelectorGroupLayoutProps = Pick<
    RowProps,
    "gap" | "justifyContent" | "alignItems" | "reverse"
>;

export type SelectorGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = FormControlledComponentProps<CoreSelectorGroupProps<T, LabelProps, D, Multiple>> &
    SelectorGroupLayoutProps & {
        selectorLabelProps?: Omit<LabelProps, "label">;
    };

export type InnerSelectorGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = Pick<
    SelectorGroupProps<T, Multiple, D>,
    "options" | "children" | "selectorLabelProps" | "renderController"
> &
    Required<
        Pick<
            SelectorGroupProps<T, Multiple, D>,
            "direction" | "disabled" | "readonly" | "controller" | "multiple" | "value"
        >
    > &
    SelectorGroupLayoutProps & {
        setValue: (val: Multiple extends true ? T[] : T) => any;
    };
