import styled, { css } from "styled-components";
import { PaperStyles } from "./Paper.types";
import { alpha } from "@peersyst/react-utils";

const getOverlayAlpha = (elevation: number): number => {
    let alphaValue;
    if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
    } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Number((alphaValue / 100).toFixed(2));
};

export const PaperRoot = styled.div<PaperStyles>`
    width: max-content;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.background};
    border-radius: ${({ square, theme }) => !square && theme.borderRadius};
    box-shadow: ${({ elevation, theme }) => theme.shadows[elevation]};
    background-image: ${({ theme, elevation }) =>
        theme.palette.mode === "dark" &&
        css`linear-gradient(${alpha("#fff", getOverlayAlpha(elevation))},
      ${alpha("#fff", getOverlayAlpha(elevation))})`};
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
