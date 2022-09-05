import styled, { css } from "styled-components";
import { ToastContainerStylesProps, ToastPosition } from "./Toast.types";

function getPosition(position: ToastPosition) {
    switch (position) {
        case "bottom-center":
            return css`
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%);
            `;
        case "bottom-left":
            return css`
                bottom: 24px;
                left: 24px;
            `;
        case "bottom-right":
            return css`
                bottom: 24px;
                right: 24px;
            `;
        case "top-center":
            return css`
                top: 24px;
                left: 50%;
                transform: translateX(-50%);
            `;
        case "top-left":
            return css`
                top: 24px;
                left: 24px;
            `;
        case "top-right":
            return css`
                top: 24px;
                right: 24px;
            `;
    }
}

export const ToastContainer = styled.div<ToastContainerStylesProps>`
    position: fixed;
    ${({ position }) => getPosition(position)};
    z-index: ${(p) => p.theme.zIndex.toast};
`;
