import styled from "styled-components";
import { UploadStyleProps } from "./Upload.types";

export const UploadRoot = styled.span<UploadStyleProps>`
    display: contents;
    cursor: pointer;
    > * *:not(img) {
        pointer-events: none;
    }
    input {
        display: none;
    }

    &.Disabled {
        cursor: default;
        pointer-events: none;
        * {
            pointer-events: none;
        }
    }

    &.Readonly {
        cursor: default;
    }
`;
