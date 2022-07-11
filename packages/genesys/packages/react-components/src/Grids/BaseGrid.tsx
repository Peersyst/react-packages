import { Component } from "react";
import { BaseBreakpoint, BaseGridProps, BaseGridState } from "./Grids.types";

export default class BaseGrid<P extends BaseGridProps, S extends BaseGridState> extends Component<
    P,
    S
> {
    getRowSize(breakpoint: BaseBreakpoint): number | string | undefined {
        return (
            breakpoint.rowSize ||
            (breakpoint.maxWidth < (this.state.activeBreakpoint || 0)
                ? this.state.rowSize
                : this.props.rowSize)
        );
    }

    getColGap(breakpoint: BaseBreakpoint): number | undefined {
        return (
            breakpoint.colGap ||
            (breakpoint.maxWidth < (this.state.activeBreakpoint || 0)
                ? this.state.colGap
                : this.props.colGap || 20)
        );
    }

    getRowGap(breakpoint: BaseBreakpoint): number | undefined {
        return (
            breakpoint.rowGap ||
            (breakpoint.maxWidth < (this.state.activeBreakpoint || 0)
                ? this.state.rowGap
                : this.props.rowGap || 20)
        );
    }
}
