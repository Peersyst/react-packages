import styled, { css } from "styled-components";

export const ExpandableBodyRoot = styled.div<{ open: boolean }>`
    width: 100%;
    max-height: 0;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    box-sizing: border-box;

    transition: max-height 0.5s;

    ${({ open }) =>
        open &&
        css`
            max-height: 200px;
        `}
`;
