import { BaseBreakpoint } from "../Grids.types";

export default function (
    breakpoint: BaseBreakpoint,
    activeBreakpoint: number | undefined,
    currentRowGap: number | string | undefined,
    defaultRowGap: number | string | undefined,
): number | string | undefined {
    return (
        breakpoint.rowGap ||
        (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentRowGap : defaultRowGap || 20)
    );
}
