import styled from "styled-components";

export const TabGroupRoot = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;

    min-width: 100%;
    max-width: 100%;
`;

export const TabGroupContainer = styled.div`
    position: relative;
    isolation: isolate;

    display: flex;
    flex: 1;
    column-gap: 20px;
    align-items: center;
    padding: 10px 0;

    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;
