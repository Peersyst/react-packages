import { createContext } from "react";

export interface TabsContextInterface {
    activeIndex: number;
    onTabChange: (index: number) => void;
    activeRef: HTMLDivElement | null;
    setActiveRef: (ref: HTMLDivElement | null) => void;
}

export const TabsContext = createContext<TabsContextInterface>({
    activeIndex: 0,
    onTabChange: () => undefined,
    activeRef: null,
    setActiveRef: () => undefined,
});
export const TabsProvider = TabsContext.Provider;
export const TabsConsumer = TabsContext.Consumer;
