import styled, { css } from "styled-components";
import { ToastContainerStylesProps, ToastContentStylesProps, ToastPosition } from "./Toast.types";
import { Paper } from "../Paper";

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

export const ToastContent = styled(Paper)<ToastContentStylesProps>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    box-sizing: border-box;
    width: fit-content;
    min-height: 56px;
    min-width: 300px;
    max-width: 360px;
    padding: 14px;
    border-radius: ${(props) => props.theme.borderRadius};

    ${({ theme, type }) => {
        const statusColor = type && type !== "loading" ? theme.palette.status[type] : undefined;
        return statusColor
            ? css`
                  color: white;
                  background-color: ${statusColor};
              `
            : css`
                  background-color: ${theme.palette.background};
              `;
    }};

    svg {
        font-size: 18px;
    }

    @media screen and (max-width: 400px) {
        min-width: calc(100vw - 48px);
        max-width: calc(100vw - 48px);
    }
`;

export const ToastAction = styled.div`
    margin-left: auto;
`;
