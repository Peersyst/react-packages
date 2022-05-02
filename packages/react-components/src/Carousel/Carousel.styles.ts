import styled from "styled-components";
import { Row } from "../Row";

export const CarouselWrapper = styled.div`
    --arrows-inset: clamp(10px, 3vw, 20px);

    position: relative;

    width: 100%;
    max-width: 100vw;
`;

export const CarouselRoot = styled(Row)`
    width: 100%;
    max-width: 100vw;

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

export const CarouselArrowsWrapper = styled.div`
    box-sizing: border-box;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 var(--arrows-inset);
`;
