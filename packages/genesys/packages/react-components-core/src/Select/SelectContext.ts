import { createContext } from "react";

export interface SelectContextType<T> {
    value: T | T[];
    multiple: boolean;
    readonly: boolean;
    setValue: (value: T | T[]) => void;
    setOpen: (value: boolean) => void;
    compare?: (a: T, b: T) => boolean;
}

export const SelectContext = createContext<any>({
    value: undefined,
    multiple: false,
    readonly: false,
    setValue: () => undefined,
    setOpen: () => undefined,
    compare: (a: any, b: any) => a === b,
});
export const SelectProvider = SelectContext.Provider;
export const SelectConsumer = SelectContext.Consumer;
