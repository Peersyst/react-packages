import { CoreSelectorGroupProps, SelectorDirection } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";
import { LabelProps } from "../Label";
import { RowProps } from "../Row";
import { SelectorProps } from "./Selector";

export type SelectorGroupLayoutProps = Pick<
    RowProps,
    "gap" | "justifyContent" | "alignItems" | "reverse"
>;

export type SelectorGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = FormControlledComponentProps<
    CoreSelectorGroupProps<T, SelectorProps<T>, LabelProps, D, Multiple>
> &
    SelectorGroupLayoutProps & {
        selectorLabelProps?: Omit<LabelProps, "label">;
    };

export type InnerSelectorGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = Pick<SelectorGroupProps<T, Multiple, D>, "options" | "children" | "selectorLabelProps"> &
    Required<
        Pick<
            SelectorGroupProps<T, Multiple, D>,
            "direction" | "disabled" | "readonly" | "type" | "multiple" | "value"
        >
    > &
    SelectorGroupLayoutProps & {
        setValue: (val: Multiple extends true ? T[] : T) => any;
    };
