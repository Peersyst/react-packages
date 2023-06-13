import { useComputeStyles } from "../../../hooks";
import { CircularProgressProps, CircularProgressStyle } from "../CircularProgress.types";
import { CircularProgressComps } from "./useCircularProgress";

export default function useCircularProgressStyles(
    props: CircularProgressProps,
    comps: CircularProgressComps,
): CircularProgressStyle {
    const { color } = comps;

    return useComputeStyles("CircularProgress", props, { currentColor: color });
}
