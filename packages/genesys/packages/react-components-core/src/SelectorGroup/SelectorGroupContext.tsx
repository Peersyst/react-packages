import { createContext } from "react";

export const SelectorGroupContext = createContext<any>({
    value: undefined,
    multiple: false,
    readonly: false,
    disabled: false,
    setValue: () => undefined,
});

export const SelectorGroupProvider = SelectorGroupContext.Provider;
export const SelectorGroupConsumer = SelectorGroupContext.Consumer;
