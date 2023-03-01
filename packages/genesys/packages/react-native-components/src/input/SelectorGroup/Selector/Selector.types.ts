import {
    CoreSelectorProps,
    SelectorControllerProps as CoreSelectorControllerProps,
    SelectorController,
} from "@peersyst/react-components-core";
import { LabelProps } from "../../../display/Label";

export type BaseNativeSelectorController = "radio" | "switch";

export type NativeSelectorController = Exclude<SelectorController, "checkbox">;

export type SelectorProps<T> = CoreSelectorProps<T, LabelProps, NativeSelectorController>;

export type SelectorControllerProps = CoreSelectorControllerProps;
