import { Row } from "../../layout/Row";
import { PaginationDot } from "./DottedPagination.styles";
import { DottedPaginationProps } from "./DottedPagination.types";

const DottedPagination = ({
    pages,
    currentPage,
    style: { active: activeStyle, ...style } = {},
}: DottedPaginationProps) => {
    return (
        <Row justifyContent="center" gap={5}>
            {[...Array(pages)].map((_, i) => {
                const isActive = currentPage === i + 1;
                return (
                    <PaginationDot
                        active={isActive}
                        style={[style, activeStyle && activeStyle]}
                        key={i}
                    />
                );
            })}
        </Row>
    );
};

export default DottedPagination;
