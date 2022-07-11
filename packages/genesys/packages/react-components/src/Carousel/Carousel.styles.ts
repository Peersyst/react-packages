import styled, { css } from "styled-components";
import { Row } from "../Row";
import { IconButton } from "../IconButton";
import { CarouselArrowButtonProps } from "./Carousel.types";

export const CarouselWrapper = styled.div`
    --arrows-inset: clamp(10px, 3vw, 20px);

    position: relative;

    width: 100%;
    max-width: 100vw;
`;

export const CarouselRoot = styled(Row)`
    width: 100%;
    max-width: 100vw;

    touch-action: pan-y;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    > * {
        flex-shrink: 0;
    }
`;

export const CarouselArrow = styled(IconButton)<CarouselArrowButtonProps>(
    ({ direction }) => css`
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: ${direction === "left" && "var(--arrows-inset)"};
        right: ${direction === "right" && "var(--arrows-inset)"};
    `,
);
