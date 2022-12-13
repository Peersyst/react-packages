import {
    CoreSelectorGroupProps,
    SelectorDirection,
    SelectorProps,
} from "@peersyst/react-components-core";
import { LabelProps } from "../../display/Label";
import { RowProps } from "../../layout/Row";
import { FormControlledComponentProps } from "../FormControl";
import { NativeSelectorType } from "./Selector/Selector.types";

export type SelectorGroupLayoutProps = Pick<RowProps, "gap" | "justifyContent" | "alignItems">;

export type SelectorGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = FormControlledComponentProps<
    CoreSelectorGroupProps<T, SelectorProps<T>, LabelProps, D, Multiple, NativeSelectorType>
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
        style?: RowProps["style"];
    };
