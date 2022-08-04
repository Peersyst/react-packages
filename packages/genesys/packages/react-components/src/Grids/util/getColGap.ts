import { BaseBreakpoint } from "../Grids.types";

export default function (
    breakpoint: BaseBreakpoint,
    activeBreakpoint: number | undefined,
    currentColGap: number | string | undefined,
    defaultColGap: number | string | undefined,
): number | string | undefined {
    return (
        breakpoint.colGap ||
        (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentColGap : defaultColGap || 20)
    );
}
