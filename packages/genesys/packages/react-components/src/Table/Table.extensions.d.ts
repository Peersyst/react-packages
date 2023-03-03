import { RowData, ColumnDefBase as ReactTableColumnDefBase } from "@tanstack/table-core";
import { TableAlignment } from "./Table.types";

declare module "@tanstack/table-core" {
    export interface ColumnDefBase<TData extends RowData, TValue = unknown>
        extends Omit<ReactTableColumnDefBase<TData, TValue>, "footer"> {
        align?: TableAlignment;
        alignHeader?: TableAlignment;
        alignCells?: TableAlignment;
    }
}
