import styled from "styled-components";
import { TextInputStyles } from "./TextInput.types";

export const TextInputRoot = styled.div<TextInputStyles>(
    ({ theme, disabled }) => `
    position: relative;

    display: inline-flex;
    padding: 0 8px;

    border: solid 1px ${theme.palette.text};

    && {
        &&.Focused,
        &&.Active:not(.Readonly):not(.Disabled) {
            border-color: ${theme.palette.primary};
            input,
            textarea {
                caret-color: ${theme.palette.primary};
            }
        }

        &&.Invalid {
            border-color: ${theme.palette.status.error};
            input,
            textarea {
                caret-color: ${theme.palette.status.error};
            }
        }

        &&.Valid {
            border-color: ${theme.palette.status.success};
            input,
            textarea {
                caret-color: ${theme.palette.status.success};
            }
        }

        &&.Disabled {
            border-color: ${theme.palette.disabled};
        }
    }
    border-radius: ${theme.borderRadius};
    box-sizing: border-box;
    width: 100%;
    cursor: text;

    color: ${disabled && theme.palette.disabled};

    input,
    textarea {
        color: inherit;
        font-family: inherit;
    }

    opacity: ${disabled && 0.7};
`,
);

export const ErrorElementWrapper = styled.div`
    display: contents;
    color: ${({ theme }) => theme.palette.status.error} !important;
`;

export const ValidElementWrapper = styled.div`
    display: contents;
    color: ${({ theme }) => theme.palette.status.success} !important;
`;
