import styled, { css, CSSObject, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { ButtonRootProps } from "./Button.types";
import { ButtonSize, ButtonVariant, Theme } from "@peersyst/react-components-core";
import { emphasize, getLuminance } from "@peersyst/react-utils";

export const ButtonLoader = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
`;

const sizeStyles: Record<ButtonSize, CSSObject> = {
    sm: {
        fontSize: "0.8125rem",
        padding: "0 5px",
        height: "32px",
    },
    md: {
        fontSize: "0.875rem",
        padding: "0 8px",
        height: "36px",
    },
    lg: {
        fontSize: "0.9375rem",
        padding: "0 11px",
        height: "42px",
    },
};

function getVariantStyles(
    variant: ButtonVariant,
): FlattenInterpolation<ThemedStyledProps<ButtonRootProps, Theme>> {
    return css<ButtonRootProps>(({ theme, color: colorProp }) => {
        const color = `${colorProp} !important` || theme.palette.primary;

        switch (variant) {
            case "filled":
                return {
                    backgroundColor: color,
                    color: getLuminance(color) > 0.5 ? "#000" : "#FFF",
                    "&:hover": {
                        backgroundColor: emphasize(color, 0.2),
                    },
                    "&:active": {
                        backgroundColor: emphasize(color, 0.4),
                    },
                    "&:disabled": {
                        backgroundColor: theme.palette.disabled,
                        color: getLuminance(theme.palette.disabled) > 0.5 ? "#000" : "#FFF",
                    },
                };
            case "outlined":
                return {
                    backgroundColor: "transparent",
                    color: color,
                    border: "1px solid currentColor",
                    "&:hover": {
                        color: emphasize(color, 0.2),
                    },
                    "&:active": {
                        color: emphasize(color, 0.4),
                    },
                    "&:disabled": {
                        color: theme.palette.disabled,
                    },
                };
            case "text":
                return {
                    backgroundColor: "transparent",
                    color: color,
                    border: "none",
                    "&:hover": {
                        color: emphasize(color, 0.2),
                    },
                    "&:active": {
                        color: emphasize(color, 0.4),
                    },
                    "&:disabled": {
                        color: theme.palette.disabled,
                    },
                };
        }
    });
}

export const ButtonContent = styled.span`
    display: contents;
`;

export const ButtonRoot = styled.button<ButtonRootProps>(
    ({ theme, size, variant, fullWidth, isLoading }) => css`
        position: relative;
        isolation: isolate;

        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;

        box-sizing: border-box;
        outline: none;
        border: none;
        border-radius: ${theme.borderRadius};
        cursor: pointer;
        user-select: none;
        min-width: 64px;

        transition: all 200ms;

        ${theme.typography.button.style};
        ${sizeStyles[size]};
        ${getVariantStyles(variant)};
        ${fullWidth && "width: 100%"};

        &:focus {
            outline: 0;
        }

        &:disabled {
            pointer-events: none;
            * {
                pointer-events: none;
            }
        }

        ${isLoading &&
        css`
            > *:not(${ButtonLoader}) {
                opacity: 0;
                color: transparent !important;
            }
        `}
    `,
);
