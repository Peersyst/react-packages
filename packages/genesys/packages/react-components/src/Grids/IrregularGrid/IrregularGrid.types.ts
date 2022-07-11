import { BaseBreakpoint, BaseGridProps, BaseGridState } from "../Grids.types";

export type Pattern = (number | [number, number])[];

export interface IrregularGridBreakpoint extends BaseBreakpoint {
    pattern: Pattern;
    cols: number;
}

export interface IrregularGridProps extends BaseGridProps<IrregularGridBreakpoint> {
    /**
     * Pattern to define flex factors of every cell
     */
    pattern: Pattern;
    /**
     * Number of columns
     */
    cols: number;
}

export interface IrregularGridState extends BaseGridState {
    pattern: Pattern;
    columns: number;
    cells: number;
}
