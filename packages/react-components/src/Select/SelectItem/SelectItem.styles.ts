import styled, { css } from "styled-components";
import { alpha } from "@peersyst/react-utils";
import { SelectItemStyles } from "./SelectItem.types";

export const SelectItemRoot = styled.li<SelectItemStyles>`
    display: block;
    padding: 10px 20px;

    ${({ selected }) =>
        selected &&
        css`
            background-color: ${({ theme }) => alpha(theme.palette.primary, 0.4)};
            font-weight: bold;
        `}

    cursor: ${({ readonly }) => !readonly && "pointer"};

    &:hover {
        background-color: ${({ theme, readonly }) =>
            !readonly && alpha(theme.palette.primary, 0.2)};
    }
`;
