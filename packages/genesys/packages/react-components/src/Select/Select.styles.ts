import styled, { css } from "styled-components";
import { SelectDisplayStyles, SelectDropdownProps, SelectWrapperStyles } from "./Select.types";
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

export const SelectDisplayWrapper = styled.div<SelectWrapperStyles>(({ disabled, readonly }) => {
    const cursor = disabled || readonly ? "default" : "pointer";

    return css`
        display: contents;
        cursor: ${cursor};

        * {
            cursor: ${cursor};
        }
    `;
});

export const SelectDisplayTrigger = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const SelectDisplay = styled.div<SelectDisplayStyles>(({ theme }) => {
    const disabledStyles = css`
        color: ${theme.palette.disabled};
    `;

    return css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;

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
