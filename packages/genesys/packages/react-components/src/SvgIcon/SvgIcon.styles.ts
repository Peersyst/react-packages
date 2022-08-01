import styled from "styled-components";

export const ExtendedSvg = styled.svg`
    &:not(.Filled) {
        * {
            fill: none;
            stroke: none;

            &[fill]:not([fill="none"]) {
                fill: currentColor;
            }
            &[stroke]:not([stroke="none"]) {
                stroke: currentColor;
            }
        }
    }
`;
