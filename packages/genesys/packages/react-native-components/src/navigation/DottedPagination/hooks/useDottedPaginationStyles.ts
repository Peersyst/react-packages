import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useGlobalStyles } from "../../../config";
import { DottedPaginationProps, DottedPaginationStyle } from "../DottedPagination.types";

export default function useDottedPaginationStyles(
    props: DottedPaginationProps,
): DottedPaginationStyle {
    const { style } = props;

    const defaultStyle = useGlobalStyles("DottedPagination");
    const stylesheet = useStylesheet<DottedPaginationProps>("DottedPagination");

    const mergedStylesheet = useMergeStylesheets(stylesheet, defaultStyle, style);
    const resolvedStyles = useResolveStylesheet(props, mergedStylesheet);

    return resolvedStyles;
}
