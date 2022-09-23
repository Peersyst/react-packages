import { Row } from "../../layout/Row";
import { PaginationDot } from "./DottedPagination.styles";
import { DottedPaginationProps } from "./DottedPagination.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

const DottedPagination = (props: DottedPaginationProps) => {
    const {
        pages,
        currentPage,
        style: {
            dot: { active: activeStyle = {}, ...dotStyle } = {},
            gap = undefined,
            ...style
        } = {},
    } = useMergeDefaultProps("DottedPagination", props);

    const {
        dot: { active: globalActiveStyle = {}, ...globalDotStyle } = {},
        gap: globalGap,
        ...globalStyle
    } = useGlobalStyles("DottedPagination");

    return (
        <Row
            justifyContent="center"
            gap={gap ?? globalGap ?? 5}
            style={{ ...globalStyle, ...style }}
        >
            {[...Array(pages)].map((_, i) => {
                const isActive = currentPage === i + 1;
                return (
                    <PaginationDot
                        active={isActive}
                        style={[
                            { ...globalDotStyle, ...dotStyle },
                            isActive && { ...globalActiveStyle, ...activeStyle },
                        ]}
                        key={i}
                    />
                );
            })}
        </Row>
    );
};

export default DottedPagination;
