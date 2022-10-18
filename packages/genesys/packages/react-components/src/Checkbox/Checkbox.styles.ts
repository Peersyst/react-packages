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
    align-self: center;
    box-sizing: border-box;
    position: relative;
    display: flex;
    cursor: pointer;
    ${checkboxColor};
    font-size: 1.2rem;

    &.Disabled,
    &.Readonly {
        cursor: default;
        pointer-events: none;
        * {
            pointer-events: none;
        }
    }
`;
