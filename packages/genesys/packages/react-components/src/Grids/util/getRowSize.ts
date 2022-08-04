import { BaseBreakpoint } from "../Grids.types";

export default function (
    breakpoint: BaseBreakpoint,
    activeBreakpoint: number | undefined,
    currentRowSize: number | string | undefined,
    defaultRowSize: number | string | undefined,
): number | string | undefined {
    return (
        breakpoint.rowSize ||
        (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentRowSize : defaultRowSize)
    );
}
