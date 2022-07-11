import styled, { css } from "styled-components";
import { ButtonStyles } from "./Button.types";

export const ButtonLoader = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
`;

const sizeStyles = css<ButtonStyles>`
    ${(p) => {
        switch (p.size) {
            case "sm":
                return {
                    fontSize: "0.8125rem",
                    padding: "0 5px",
                    height: "32px",
                };
            case "md":
                return {
                    fontSize: "0.875rem",
                    padding: "0 8px",
                    height: "36px",
                };
            case "lg":
                return {
                    fontSize: "0.9375rem",
                    padding: "0 11px",
                    height: "42px",
                };
        }
    }}
`;

export const ButtonContent = styled.span`
    display: contents;
`;

export const ButtonRoot = styled.button<ButtonStyles>`
    position: relative;
    isolation: isolate;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;

    box-sizing: border-box;
    outline: none;
    border: solid 1px rgb(182, 182, 182);
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    user-select: none;
    min-width: 64px;

    ${(props) => props.theme.typography.button.style};
    ${sizeStyles};
    ${(p) => p.fullWidth && "width: 100%"};

    &:focus {
        outline: 0;
    }

    &:active {
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    &:disabled {
        filter: contrast(0.2);
        pointer-events: none;
    }

    ${({ isLoading }) =>
        isLoading &&
        css`
            > *:not(${ButtonLoader}) {
                opacity: 0;
                color: transparent !important;
            }
        `}
`;
