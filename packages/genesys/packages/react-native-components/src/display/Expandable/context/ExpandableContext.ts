import { createContext, useContext } from "react";

export interface IExpandableContext {
    open: boolean;
    toggle: () => void;
}

export const ExpandableContext = createContext<IExpandableContext>({
    open: false,
    toggle: () => {
        console.warn(
            "ExpandableContext: toggle() is being called outside of an Expandable. Thus, there is no open state to toggle.",
        );
    },
});

export const ExpandableProvider = ExpandableContext.Provider;
export const ExpandableConsumer = ExpandableContext.Consumer;

export function useExpandableContext(): IExpandableContext {
    return useContext(ExpandableContext);
}
