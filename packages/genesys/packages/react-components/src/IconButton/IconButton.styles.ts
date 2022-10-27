import { IconButtonRootProps } from "./IconButton.types";
import styled, { css } from "styled-components";

export const IconButtonRoot = styled.button<IconButtonRootProps>(
    ({ color }) => css`
        cursor: pointer;
        box-sizing: content-box;
        padding: 3px;
        display: flex;
        border-radius: 100%;
        border: 0;
        background-color: transparent;
        color: ${color};

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }

        &:disabled {
            cursor: default;
            opacity: 0.6;
            pointer-events: none;
            * {
                pointer-events: none;
            }
        }
    `,
);
