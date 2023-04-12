import { PagerViewProps, PagerViewStyle } from "../PagerView";
import { useGlobalStyles } from "../../../config";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";

export default function usePagerViewStyles(props: PagerViewProps): PagerViewStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("PagerView");
    const stylesheet = useStylesheet<PagerViewProps>("PagerView");
    const mergedStylesheets = useMergeStylesheets<PagerViewProps>(stylesheet, defaultStyle, style);

    return useResolveStylesheet(props, mergedStylesheets);
}
