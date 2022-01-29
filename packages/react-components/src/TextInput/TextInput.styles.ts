import styled, { css } from "styled-components";
import { TextInputStyles } from "./TextInput.types";
import { Col } from "../Col";

const borderColor = css<TextInputStyles>`
    border-color: ${({ theme, invalid, showValid, focused, active, disabled }) => {
        if (invalid) return theme.palette.status.error;
        else if (showValid) return theme.palette.status.success;
        else if ((focused || active) && !disabled) return theme.palette.primary;
        else return undefined;
    }};
`;

export const TextInputRoot = styled.div<TextInputStyles>`
    position: relative;

    display: inline-flex;
    padding: 0 8px;

    border: solid 1px ${(p) => p.theme.palette.text};
    && {
        ${borderColor};
    }
    border-radius: ${(props) => props.theme.borderRadius};
    box-sizing: border-box;
    width: 100%;
    cursor: text;

    color: ${({ disabled, theme }) => disabled && theme.palette.disabled};

    input,
    textarea {
        color: inherit;
        font-family: inherit;
    }

    opacity: ${({ disabled }) => disabled && 0.7};
`;

export const ErrorElementWrapper = styled.div`
    display: contents;
    color: ${({ theme }) => theme.palette.status.error};
`;

export const ValidElementWrapper = styled.div`
    display: contents;
    color: ${({ theme }) => theme.palette.status.success};
`;

export const InputErrors = styled(Col)`
    row-gap: 5px;
    padding: 8px;
`;
