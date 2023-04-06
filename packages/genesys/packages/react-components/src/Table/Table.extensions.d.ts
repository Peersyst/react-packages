import { RowData } from "@tanstack/table-core";
import { TableAlignment } from "./Table.types";

declare module "@tanstack/table-core" {
    export interface ColumnDefBase<TData extends RowData, TValue = unknown> {
        align?: TableAlignment;
        alignHeader?: TableAlignment;
        alignCells?: TableAlignment;
    }
}
