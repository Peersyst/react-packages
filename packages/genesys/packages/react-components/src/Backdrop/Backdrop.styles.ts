import styled from "styled-components";
import { BackdropStyles } from "./Backdrop.types";

export const BackdropRoot = styled.div<BackdropStyles>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${(p) => p.theme.zIndex.modal};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    background-color: ${({ theme, transparent }) =>
        transparent ? "transparent" : theme.palette.backdrop};

    pointer-events: ${({ renderBackdrop }) => !renderBackdrop && "none"};

    * {
        pointer-events: auto;
    }
`;
