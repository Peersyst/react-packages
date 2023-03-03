import { createContext, useContext } from "react";
import { TableContextType } from "./TableContext.types";

export const TableContext = createContext<TableContextType>({ table: undefined as any, data: [] });

export const TableProvider = TableContext.Provider;
export const TableConsumer = TableContext.Consumer;

export function useTable<TData = any>(): TableContextType<TData> {
    return useContext(TableContext);
}
