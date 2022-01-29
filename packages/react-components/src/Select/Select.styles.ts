import styled, { css } from "styled-components";
import { DropdownComponentProps, SelectDisplayStyles } from "./Select.types";
import { ChevronDownIcon } from "../assets/icons";

export const SelectRoot = styled.div`
    position: relative;
    width: 100%;
`;

export const displayBorder = css<SelectDisplayStyles>`
    border: 1px solid
        ${({ theme, open, disabled }) => {
            if (open) return theme.palette.primary;
            else if (disabled) return theme.palette.disabled;
            else return theme.palette.text;
        }};
`;

export const SelectDisplay = styled.div<SelectDisplayStyles>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    min-height: 36px;

    box-sizing: border-box;
    padding: 0 10px;

    border-radius: ${(props) => props.theme.borderRadius};
    ${displayBorder};

    cursor: ${({ disabled }) => !disabled && "pointer"};
    color: ${({ disabled, theme }) => disabled && theme.palette.disabled};
`;

export const DisplayContent = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 10px;
    max-width: 90%;
`;

export const SelectDropdown = styled(ChevronDownIcon)<DropdownComponentProps>`
    font-size: 0.7em;
    transform: ${({ open }) => open && "scale(-1)"};
`;
