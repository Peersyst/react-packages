import { ReactNode } from "react";
import { SelectorChildrenContext } from "../SelectGroup.types";

export interface SelectorProps<T> {
    /**
     * Selector value
     */
    value: T;
    /**
     * Selector content
     */
    children: (context: SelectorChildrenContext<T>) => ReactNode;
}
