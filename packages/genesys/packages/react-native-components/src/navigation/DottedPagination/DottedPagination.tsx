import { Row } from "../../layout/Row";
import { PaginationDot } from "./DottedPagination.styles";
import { DottedPaginationProps } from "./DottedPagination.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const DottedPagination = (props: DottedPaginationProps) => {
    const {
        pages,
        currentPage,
        style: { dot: { active: activeStyle = {}, ...dotStyle } = {}, gap = 5, ...style } = {},
    } = useMergeDefaultProps("DottedPagination", props);

    return (
        <Row justifyContent="center" gap={gap} style={style}>
            {[...Array(pages)].map((_, i) => {
                const isActive = currentPage === i + 1;
                return (
                    <PaginationDot
                        active={isActive}
                        style={[dotStyle, isActive && activeStyle]}
                        key={i}
                    />
                );
            })}
        </Row>
    );
};

export default DottedPagination;
