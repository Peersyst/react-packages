import { CoreSelectGroupProps, SelectorDirection } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";
import { LabelProps } from "../Label";
import { RowProps } from "../Row";
import { SelectorProps } from "./Selector/Selector.types";

export type SelectorGroupLayoutProps = Pick<
    RowProps,
    "gap" | "justifyContent" | "alignItems" | "reverse"
>;

export type SelectGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = FormControlledComponentProps<
    CoreSelectGroupProps<T, SelectorProps<T>, LabelProps, D, Multiple>
> &
    SelectorGroupLayoutProps & {
        selectorLabelProps?: Omit<LabelProps, "label">;
    };

export type InnerSelectGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = Pick<SelectGroupProps<T, Multiple, D>, "options" | "children" | "selectorLabelProps"> &
    Required<
        Pick<
            SelectGroupProps<T, Multiple, D>,
            "direction" | "disabled" | "readonly" | "type" | "multiple" | "value"
        >
    > &
    SelectorGroupLayoutProps & {
        setValue: (val: Multiple extends true ? T[] : T) => any;
    };
