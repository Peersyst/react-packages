import { ReactElement } from "react";
import { SelectorGroupContextType, SelectorType } from "../SelectorGroup.types";
import { CoreLabelProps } from "../../Label";
import { CoreFormControlledComponentProps } from "../../FormControl";

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
    ST = SelectorType,
> = Pick<SelectorProps<T>, Exclude<keyof SelectorProps<any>, "children">> & {
    /**
     * Selector type
     */
    type?: ST;
} & Pick<CoreFormControlledComponentProps<T, LP>, "Label" | "LabelProps" | "label">;

export interface SelectorControllerProps<LP extends CoreLabelProps = CoreLabelProps> {
    value?: boolean;
    onChange?: (value: boolean) => any;
    readonly?: boolean;
    disabled?: boolean;
    LabelProps?: Omit<LP, "label">;
}
