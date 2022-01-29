import styled, { css, keyframes } from "styled-components";
import { darken } from "../utils/color";

export const ProgressBarRoot = styled.span(
    ({ theme }) => css`
        position: relative;
        isolation: isolate;
        display: block;
        height: 3px;
        color: ${theme.palette.primary};
        background-color: ${darken(theme.palette.primary, 0.5)};
    `,
);

const indeterminate1Keyframe = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

const indeterminate2Keyframe = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;

const progressBarTrackStyles = css`
    position: absolute;
    left: 0;
    top: 50%;
    height: inherit;
    border-radius: inherit;
    transition: transform 0.4s linear;
    transform-origin: left center;
    color: inherit;
    background-color: currentColor;
`;

const loadingProgressBarTrackStyles = css`
    width: auto;
    transform: translateY(-50%);
`;

export const ProgressBarTrack = styled.span`
    ${progressBarTrackStyles};
    width: 100%;
`;

export const LoadingProgressBarTrack1 = styled.span`
    ${progressBarTrackStyles};
    ${loadingProgressBarTrackStyles};

    animation: ${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
`;

export const LoadingProgressBarTrack2 = styled.span`
    ${progressBarTrackStyles};
    ${loadingProgressBarTrackStyles};

    animation: ${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
`;

export const LoadingProgressBarContainer = styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    height: inherit;
    width: 100%;
    overflow: hidden;
    color: inherit;
`;
