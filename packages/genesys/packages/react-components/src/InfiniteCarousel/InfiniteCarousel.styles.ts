import styled, { css } from "styled-components";

export type InfiniteCarouselDirection = "ltr" | "rtl" | "ttb" | "btt";

export interface InfiniteCarouselBodyProps {
    direction: InfiniteCarouselDirection;
}

export const InfiniteCarouselRoot = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const InfiniteCarouselBody = styled.div<InfiniteCarouselBodyProps>(
    ({ direction }) => css`
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: ${(direction === "ttb" || direction === "btt") && "column"};
        align-items: center;
        width: 100%;
        ${direction === "rtl" &&
        css`
            left: unset;
            right: 0;
        `}
        ${direction === "ltr" &&
        css`
            top: unset;
            bottom: 0;
        `}
    `,
);
