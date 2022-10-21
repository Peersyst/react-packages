import { createContext } from "react";

export const SelectGroupContext = createContext<any>({
    value: undefined,
    multiple: false,
    readonly: false,
    disabled: false,
    setValue: () => undefined,
});

export const SelectGroupProvider = SelectGroupContext.Provider;
export const SelectGroupConsumer = SelectGroupContext.Consumer;
