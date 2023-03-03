import styled, { css } from "styled-components";
import {
    TableSortButtonProps,
    TableHeaderProps,
    TableHeaderSortButtonContainerProps,
    TableHeaderTitleProps,
    TableHeaderContentProps,
} from "./TableHead.types";
import { IconButton } from "../../IconButton";
import { alpha } from "@peersyst/react-utils";
import { Row } from "../../Row";

export const TableHeadRoot = styled.thead`
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: inherit;

    tr {
        height: 3.5rem;

        th {
            border-bottom: var(--table-header-border);
        }
    }
`;

export const TableHeader = styled.th<TableHeaderProps>(
    ({ canSort }) => css`
        cursor: ${canSort ? "pointer" : "default"};

        &:hover {
            .TableHeaderSortButtonContainer {
                opacity: 1;
                width: auto;
            }
        }
    `,
);

export const TableHeaderContent = styled(Row).attrs({
    gap: "0.25rem",
    alginItems: "center",
})<TableHeaderContentProps>(
    ({ alignment }) => css`
        flex-direction: ${alignment === "right" ? "row-reverse" : "row"};
        height: 100%;
    `,
);

export const TableHeaderTitle = styled.span<TableHeaderTitleProps>(
    ({ alignment }) => css`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: ${alignment};
    `,
);

export const TableHeaderSortButtonContainer = styled.div<TableHeaderSortButtonContainerProps>(
    ({ isSorted }) => css`
    display: flex;
    opacity: ${isSorted ? "1" : "0"}};
    width: ${isSorted ? "auto" : "0px"};
    transition: opacity 200ms;
`,
);

export const TableSortButton = styled(IconButton)<TableSortButtonProps>(
    ({ theme, active }) => css`
        color: ${alpha(theme.palette.text, active ? 0.6 : 0.35)};

        &:hover {
            color: ${alpha(theme.palette.text, 0.5)};
        }
    `,
);
