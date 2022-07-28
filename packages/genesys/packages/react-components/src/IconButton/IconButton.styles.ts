import { IconButtonStyle } from "./IconButton.types";
import styled from "styled-components";

export const IconButtonRoot = styled.button<IconButtonStyle>`
    cursor: pointer;
    box-sizing: content-box;
    padding: 3px;
    display: flex;
    border-radius: 100%;
    border: 0;
    background-color: transparent;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        cursor: default;
        opacity: 0.6;
        pointer-events: none;
        * {
            pointer-events: none;
        }
    }
`;
