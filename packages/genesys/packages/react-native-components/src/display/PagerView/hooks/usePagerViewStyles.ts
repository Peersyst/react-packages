import { PagerViewProps, PagerViewStyle } from "../PagerView";
import { useComputeStyles } from "../../../hooks";

export default function usePagerViewStyles(props: PagerViewProps): PagerViewStyle {
    return useComputeStyles("PagerView", props);
}
