import { ReactElement } from "react";
import { CoreFormControlledComponentProps } from "../FormControl";
import { CoreLabelProps } from "../Label";
import { CoreSelectorProps, SelectorType } from "./Selector/Selector.types";

export type SelectorDirection = "row" | "column";

export interface SelectorOption<T> {
    /**
     * Selector label
     */
    label: string;
    /**
     * Selector value
     */
    value: T;
}

export type CoreSelectorGroupProps<
    T,
    CustomSelectorProps,
    LP extends CoreLabelProps,
    D extends SelectorDirection = "column",
    Multiple extends boolean = false,
    CP extends object = {}, //Custom controller props
    ST = SelectorType<LP, CP>,
> = CoreFormControlledComponentProps<Multiple extends true ? T[] : T, LP> &
    Pick<CoreSelectorProps<T, LP, CP, ST>, "content" | "renderSelector"> & {
        /**
         * Make the selection multiple
         */
        multiple?: Multiple;
        /**
         * SelectGroup with default Selector component
         */
        options?: SelectorOption<T>[];
        /**
         * Add custom Selector components
         */
        children?: ReactElement<CustomSelectorProps>[];
        /**
         * Selector direction
         */
        direction?: D;
    };

export interface SelectorGroupContextType<T> {
    value: T | T[];
    multiple: boolean;
    readonly: boolean;
    disabled: boolean;
    setValue: (value: T | T[]) => void;
}
