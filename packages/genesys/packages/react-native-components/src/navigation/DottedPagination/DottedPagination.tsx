import { Row } from "../../layout/Row";
import { PaginationDot } from "./DottedPagination.styles";
import { DottedPaginationProps } from "./DottedPagination.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useDottedPaginationStyles } from "./hooks";

const DottedPagination = (rawProps: DottedPaginationProps) => {
    const props = useMergeDefaultProps("DottedPagination", rawProps);

    const { pages, currentPage, style: _style } = props;

    const {
        dot: { active: dotActiveStyle = {}, ...dotStyle } = {},
        gap: gap,
        ...style
    } = useDottedPaginationStyles(props);

    return (
        <Row justifyContent="center" gap={gap ?? 5} style={style}>
            {[...Array(pages)].map((_, i) => {
                const isActive = currentPage === i + 1;
                return (
                    <PaginationDot
                        active={isActive}
                        style={[dotStyle, isActive && { ...dotActiveStyle }]}
                        key={i}
                    />
                );
            })}
        </Row>
    );
};

export default DottedPagination;
