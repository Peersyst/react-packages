import { BaseBreakpoint, BaseGridProps, BaseGridState } from "../Grids.types";

export interface GridBreakpoint extends BaseBreakpoint {
    /**
     * Number of columns
     */
    cols: number;
}

export interface GridProps extends BaseGridProps<GridBreakpoint> {
    cols: number;
}

export interface GridState extends BaseGridState {
    columns: number;
}
