import styled, { css } from "styled-components";
import { Row } from "../Row";
import { ChipSize } from "@peersyst/react-components-core";
import { alpha } from "@peersyst/react-utils";

export const chipGapSizes: Record<ChipSize, string> = {
    sm: "0.5rem",
    md: "0.625rem",
    lg: "0.625rem",
};

export const ChipRoot = styled(Row).attrs({ alignItems: "center" })(
    ({ theme }) => css`
        box-sizing: border-box;
        white-space: nowrap;
        vertical-align: middle;

        color: ${theme.palette.text};
        font-size: 0.8125rem;

        border-radius: ${theme.borderRadius};

        width: fit-content;

        &.Sm {
            font-size: 0.75rem;
            height: 1.5rem;
            padding: 0 0.625rem;

            &.Rounded {
                border-radius: 0.75rem;
            }
        }
        &.Md {
            height: 2rem;
            padding: 0 0.75rem;

            &.Rounded {
                border-radius: 1rem;
            }
        }
        &.Lg {
            height: 2.25rem;
            padding: 0 0.875rem;

            &.Rounded {
                border-radius: 1.125rem;
            }
        }

        &.Filled {
            --chipColor: ${alpha(theme.palette.text, 0.1)};
            background-color: var(--chipColor);
            border: none;
        }
        &.Outlined {
            --chipColor: ${alpha(theme.palette.text, 0.3)};
            background-color: transparent;
            border: 1px solid var(--chipColor);
        }

        &.Disabled {
            color: ${theme.palette.disabled};
            --chipColor: ${alpha(theme.palette.disabled, 0.2)};

            &.Outlined {
                --chipColor: ${alpha(theme.palette.disabled, 0.4)};
            }
        }

        cursor: default;
        &.Clickable:not(.Disabled) {
            cursor: pointer;

            &:hover {
                --chipColor: ${alpha(theme.palette.text, 0.15)};

                &.Outlined {
                    --chipColor: ${alpha(theme.palette.text, 0.35)};
                }
            }

            &:active {
                --chipColor: ${alpha(theme.palette.text, 0.12)};

                &.Outlined {
                    --chipColor: ${alpha(theme.palette.text, 0.32)};
                }
            }
        }

        transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `,
);

export const ChipLabel = styled.span`
    font-size: 0.8125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
