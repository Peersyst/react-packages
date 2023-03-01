import { JSXElementConstructor, ReactElement } from "react";
import { SelectorGroupContextType } from "../SelectorGroup.types";
import { CoreLabelProps } from "../../Label";
import { CoreFormControlledComponentProps } from "../../FormControl";
import { ReactChild } from "@peersyst/react-types";

export type BaseSelectorType = "radio" | "checkbox" | "switch";

export type SelectorType<LP extends CoreLabelProps = CoreLabelProps> =
    | BaseSelectorType
    | JSXElementConstructor<SelectorControllerProps<LP>>;

export interface SelectorChildrenContext<T>
    extends Omit<SelectorGroupContextType<T>, "setValue" | "value"> {
    isSelected: boolean;
    /**
     * Current selected values of the SelectorGroup
     */
    selected: T | T[];
    /**
     * Set the current selected value/s of the SelectorGroup
     */
    setSelected: () => void;
}

export interface SelectorProps<T> {
    /**
     * Selector value
     */
    value: T;
    /**
     * Selector content
     */
    children: (context: SelectorChildrenContext<T>) => ReactElement<SelectorControllerProps>;
}

export type CoreSelectorProps<
    T,
    LP extends CoreLabelProps = CoreLabelProps,
    ST = SelectorType<LP> /* Custom selector types */,
> = Pick<SelectorProps<T>, Exclude<keyof SelectorProps<T>, "children">> & {
    /**
     * Selector type
     */
    controller?: ST;
    /**
     * Custom render selector function. If not provided, the default selector will be rendered
     * - Use setSelected to update the selected value/s of the SelectorGroup
     * - Use isSelected to know if the current element is the selected one
     */
    renderController?: (
        context: SelectorChildrenContext<T> & { label?: ReactChild },
    ) => ReactElement;
} & Pick<CoreFormControlledComponentProps<T, LP>, "Label" | "LabelProps" | "label">;

export interface SelectorControllerProps<LP extends CoreLabelProps = CoreLabelProps> {
    value?: boolean;
    onChange?: (value: boolean) => any;
    readonly?: boolean;
    disabled?: boolean;
    LabelProps?: Omit<LP, "label">;
    label?: ReactChild;
}
