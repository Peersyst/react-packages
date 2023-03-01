import {
    CoreSelectorProps,
    SelectorControllerProps as CoreSelectorControllerProps,
} from "@peersyst/react-components-core";
import { CSSProperties } from "react";
import { LabelProps } from "../../Label";

export interface SelectorProps<T> extends CoreSelectorProps<T, LabelProps> {
    /**
     * Selector className
     */
    className?: string;
    /**
     * Selector style
     */
    style?: CSSProperties;
}

export interface SelectorControllerExtraProps {
    /**
     * Selector controller className
     */
    className?: string;
    /**
     * Selector controller style
     */
    style?: CSSProperties;
}

export type SelectorControllerProps = CoreSelectorControllerProps<LabelProps> &
    SelectorControllerExtraProps;
