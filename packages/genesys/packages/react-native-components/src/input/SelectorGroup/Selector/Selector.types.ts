import {
    CoreSelectorProps,
    SelectorControllerProps as CoreSelectorControllerProps,
    SelectorType,
} from "@peersyst/react-components-core";
import { LabelProps } from "../../../display/Label";

export type NativeSelectorType = Exclude<SelectorType, "checkbox">;

export type SelectorProps<T> = CoreSelectorProps<T, LabelProps, NativeSelectorType>;

export type SelectorControllerProps = CoreSelectorControllerProps;
