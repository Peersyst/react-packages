import { BaseBreakpoint, BaseGridProps } from "../Grids.types";

export interface GridBreakpoint extends BaseBreakpoint {
    /**
     * Number of columns
     */
    cols: number;
}

export interface GridProps extends BaseGridProps<GridBreakpoint> {
    cols: number;
}
