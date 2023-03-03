import { Table } from "@tanstack/react-table";

export interface TableContextType<TData = any> {
    data: TData;
    table: Table<TData>;
    rowCount?: number;
}
