import { BaseBreakpoint } from "../Grids.types";
import { useEffect, useState } from "react";
export default function <B extends BaseBreakpoint = BaseBreakpoint>(
    breakpoints: B[],
    maxBreakpoint: Omit<B, "maxWidth">,
): B[] {
    const [sortedBreakpoints, setSortedBreakpoints] = useState<B[]>([]);
    useEffect(() => {
        setSortedBreakpoints([
            // @ts-ignore
            ...(breakpoints.sort((firstEl: B, secondEl: B) =>
                firstEl.maxWidth < secondEl.maxWidth ? -1 : 1,
            ) || []),
            // @ts-ignore
            {
                maxWidth: Infinity,
                ...maxBreakpoint,
            },
        ]);
    }, [JSON.stringify(breakpoints), JSON.stringify(maxBreakpoint)]);
    return sortedBreakpoints;
}