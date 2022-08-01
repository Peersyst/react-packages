import styled from "styled-components";

export const ExtendedSvg = styled.svg`
    &:not(.Filled) {
        * {
            stroke: none;

            &[fill]:not([fill="none"]) {
                fill: currentColor;
            }
            &[stroke]:not([stroke="none"]) {
                stroke: currentColor;

                &:not([fill]) {
                    fill: none;
                }
            }
        }
    }
`;
