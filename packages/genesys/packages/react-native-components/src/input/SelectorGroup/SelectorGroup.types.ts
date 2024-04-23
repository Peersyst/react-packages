import { CoreSelectorGroupProps, SelectorDirection } from "@peersyst/react-components-core";
import { LabelProps } from "../../display/Label";
import { RowProps } from "../../layout/Row";
import { FormControlledComponentProps } from "../FormControl";
import { NativeSelectorController } from "./Selector/Selector.types";

export type SelectorGroupLayoutProps = Pick<RowProps, "gap" | "justifyContent" | "alignItems">;

export type SelectorGroupProps<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
> = FormControlledComponentProps<
    CoreSelectorGroupProps<T, LabelProps, D, Multiple, NativeSelectorController>
> &
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
        style?: RowProps["style"];
    };
