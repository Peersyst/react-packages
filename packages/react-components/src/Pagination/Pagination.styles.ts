import styled, { css } from "styled-components";
import { PagesListProps, PaginationSize } from "./Pagination.types";

export const PaginationRoot = styled.nav``;

const listSpacings: Record<PaginationSize, number> = {
    sm: 3,
    md: 6,
    lg: 8,
};

export const PagesList = styled.ul<PagesListProps>(
    ({ size }) => css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
        column-gap: ${listSpacings[size]}px;
    `,
);
