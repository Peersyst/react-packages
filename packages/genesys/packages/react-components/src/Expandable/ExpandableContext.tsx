import { createContext } from "react";

export interface IExpandableContext {
    open: boolean;
    toggle: (open?: boolean) => void;
}

export const ExpandableContext = createContext<IExpandableContext>({
    open: false,
    toggle: () => undefined,
});
export const ExpandableProvider = ExpandableContext.Provider;
export const ExpandableConsumer = ExpandableContext.Consumer;
