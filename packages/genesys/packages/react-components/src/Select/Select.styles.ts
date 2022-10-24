import styled, { css } from "styled-components";
import { SelectDisplayStyles, SelectDropdownProps } from "./Select.types";
import { SelectItem } from "./SelectItem";

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

export const SelectDisplay = styled.div<SelectDisplayStyles>(({ theme, readonly }) => {
    const disabledStyles = css`
        cursor: default;
        color: ${theme.palette.disabled};
        pointer-events: none;
        * {
            pointer-events: none;
        }
    `;

    return css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;

        cursor: ${readonly ? "default" : "pointer"};

        min-height: 36px;

        box-sizing: border-box;
        padding: 0 10px;

        border-radius: ${(props) => props.theme.borderRadius};
        ${displayBorder};

        &&.Disabled {
            ${disabledStyles}
        }
    `;
});

export const DisplayContent = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 10px;
    max-width: 90%;
`;

export const SelectDropdown = styled.span<SelectDropdownProps>`
    display: flex;
    font-size: 0.7em;
    transform: ${({ open }) => open && "scale(-1)"};
`;

export const ClearItem = styled(SelectItem)`
    font-style: italic;
`;
