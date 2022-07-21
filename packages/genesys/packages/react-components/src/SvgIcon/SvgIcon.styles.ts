import styled from "styled-components";

export const ExtendedSvg = styled.svg`
    path {
        &[fill]:not([fill="none"]),
        &:not([stroke]),
        &[stroke="none"] {
            fill: currentColor;
        }

        &[stroke]:not([stroke="none"]) {
            stroke: currentColor;
        }
    }
`;
