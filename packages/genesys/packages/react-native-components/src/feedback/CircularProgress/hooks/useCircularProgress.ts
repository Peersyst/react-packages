import { ParsedThemeColor, useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { CircularProgressProps } from "../CircularProgress.types";

export interface CircularProgressComps {
    color: ParsedThemeColor;
}

export interface UseCircularProgressResult {
    props: CircularProgressProps;
    comps: CircularProgressComps;
}

export default function useCircularProgress(
    rawProps: CircularProgressProps<any>, // AnimationConfig type is not relevant here
): UseCircularProgressResult {
    const props = useMergeDefaultProps("CircularProgress", rawProps);

    const { color: colorProp = "primary" } = props;

    const color = useColor(colorProp);

    return {
        props,
        comps: {
            color,
        },
    };
}
