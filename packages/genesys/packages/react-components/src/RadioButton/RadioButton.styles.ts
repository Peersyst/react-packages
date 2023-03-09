import styled, { css } from "styled-components";

const radioColor = css(({ theme }) => ({
    color: theme.palette.text,
    ["&.Disabled"]: {
        color: theme.palette.disabled,
    },
    ["&.Checked"]: {
        color: theme.palette.primary,
    },
}));

export const RadioButtonRoot = styled.span`
    box-sizing: border-box;
    position: relative;
    display: flex;
    ${radioColor};
    overflow: hidden;
    font-size: 1.2rem;
`;
