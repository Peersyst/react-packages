import { DottedPaginationProps, DottedPaginationStyle } from "../DottedPagination.types";
import { useComputeStyles } from "../../../hooks";

export default function useDottedPaginationStyles(
    props: DottedPaginationProps,
): DottedPaginationStyle {
    return useComputeStyles("DottedPagination", props);
}
