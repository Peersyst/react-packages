import { ComponentType, DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { UploadStyleProps } from "./Upload.types";

export const UploadRoot = styled.span<UploadStyleProps>`
    display: contents;
    cursor: ${({ readonly, disabled }) => !readonly && !disabled && "pointer"};
    > * *:not(img) {
        pointer-events: none;
    }
`;

export const UploadInput = styled.input`
    display: none;
` as ComponentType<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
        directory: boolean;
        webkitdirectory: boolean;
        mozdirectory: boolean;
    }
>;
