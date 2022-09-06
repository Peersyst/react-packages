import { useEffect } from "react";
import { BaseBreakpoint, GridState } from "../Grids.types";

export default function <B extends BaseBreakpoint = BaseBreakpoint>(
    setPatterns: (reset?: boolean) => void,
    sortedBreakpoints: B[],
    gridState: GridState,
): void {
    useEffect(() => {
        const cb = () => setPatterns();
        window.addEventListener("resize", cb);
        return () => {
            window.removeEventListener("resize", cb);
        };
    }, [gridState]);

    useEffect(() => {
        setPatterns(true);
    }, [sortedBreakpoints]);
}
