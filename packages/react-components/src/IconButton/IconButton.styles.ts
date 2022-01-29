import { IconButtonStyle } from "./IconButton.types";
import styled from "styled-components";

export const IconButtonRoot = styled.button<IconButtonStyle>`
    cursor: ${({ disabled }) => !disabled && "pointer"};
    box-sizing: content-box;
    padding: 3px;
    display: flex;
    border-radius: 100%;
    border: 0;
    background-color: transparent;

    opacity: ${({ disabled }) => disabled && 0.6};

    &:hover {
        opacity: ${({ disabled }) => !disabled && 0.8};
    }
`;
