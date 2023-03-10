import { FormControl } from "../FormControl";
import styled, { css } from "styled-components";

const checkboxColor = css(({ theme }) => ({
    color: theme.palette.text,
    ["&.Disabled"]: {
        color: theme.palette.disabled,
    },
    ["&.Checked"]: {
        color: theme.palette.primary,
    },
}));

export const CheckboxRoot = styled.span`
    box-sizing: border-box;
    position: relative;
    display: flex;
    ${checkboxColor};
    font-size: 1.2rem;
`;
