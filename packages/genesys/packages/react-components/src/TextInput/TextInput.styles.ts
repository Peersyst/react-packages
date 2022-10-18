import styled from "styled-components";
import { TextInputStyles } from "./TextInput.types";

export const TextInputRoot = styled.div<TextInputStyles>`
    position: relative;

    display: inline-flex;
    padding: 0 8px;

    border: solid 1px ${(p) => p.theme.palette.text};

    && {
        &&.Focused,
        &&.Active {
            border-color: ${(p) => p.theme.palette.primary};
        }

        &&.Invalid {
            border-color: ${(p) => p.theme.palette.status.error};
        }

        &&.Valid {
            border-color: ${(p) => p.theme.palette.status.success};
        }

        &&.Disabled {
            border-color: ${(p) => p.theme.palette.disabled};
            cursor: default;
            pointer-events: none;
            * {
                pointer-events: none;
            }
        }
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
    color: ${({ theme }) => theme.palette.status.error} !important;
`;

export const ValidElementWrapper = styled.div`
    display: contents;
    color: ${({ theme }) => theme.palette.status.success} !important;
`;
