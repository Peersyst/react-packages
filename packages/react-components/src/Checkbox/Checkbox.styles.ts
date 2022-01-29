import styled, { css } from "styled-components";
import { CheckboxStyleProps } from "./Checkbox.types";

const checkboxColor = css<CheckboxStyleProps>`
    color: ${({ disabled, checked, theme }) => {
        if (disabled) return theme.palette.disabled;
        else if (checked) return theme.palette.primary;
        else return theme.palette.text;
    }};
`;

export const CheckboxRoot = styled.span<CheckboxStyleProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    cursor: ${({ disabled }) => !disabled && "pointer"};
    ${checkboxColor};
    font-size: 1.2rem;
`;
