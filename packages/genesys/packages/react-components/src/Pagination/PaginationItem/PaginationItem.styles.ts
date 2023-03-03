import styled, { css } from "styled-components";
import { alpha } from "@peersyst/react-utils";
import { PaginationItemRootProps } from "./PaginationItem.types";

const sm = { size: "26px", px: "4px" };
const md = { size: "32px", px: "6px" };
const lg = { size: "40px", px: "10px" };
const itemSizes = { sm, md, lg };

export const PaginationItemRoot = styled.button<PaginationItemRootProps>(
    ({ theme, selected, disabled, size: sizeProp, isEllipsis }) => {
        const { size, px } = itemSizes[sizeProp];
        const enabled = !isEllipsis && !disabled;

        return css`
            position: relative;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            cursor: ${enabled && "pointer"};
            outline: 0;
            border: 0;
            user-select: none;
            vertical-align: middle;
            appearance: none;
            text-decoration: none;
            border-radius: 50%;

            min-width: ${size};
            height: ${size};
            padding: 0 ${px};
            box-sizing: border-box;
            font-size: 0.875rem;

            color: inherit;
            background-color: ${selected ? alpha(theme.palette.primary, 0.6) : "transparent"};
            opacity: ${disabled && 0.6};

            transition: background-color 200ms;

            &:hover {
                background-color: ${enabled && alpha(theme.palette.primary, 0.3)};
            }

            &:active {
                background-color: ${enabled && alpha(theme.palette.primary, 0.4)};
            }
        `;
    },
);
