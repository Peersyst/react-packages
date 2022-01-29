import styled, { css } from "styled-components";
import { RadioButtonStyleProps } from "./RadioButton.types";

const radioColor = css<RadioButtonStyleProps>`
    color: ${({ disabled, checked, theme }) => {
        if (disabled) return theme.palette.disabled;
        else if (checked) return theme.palette.primary;
        else return theme.palette.text;
    }};
`;

export const RadioButtonRoot = styled.span<RadioButtonStyleProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    cursor: ${({ disabled }) => !disabled && "pointer"};
    ${radioColor};
    overflow: hidden;
    font-size: 1.2rem;
`;
