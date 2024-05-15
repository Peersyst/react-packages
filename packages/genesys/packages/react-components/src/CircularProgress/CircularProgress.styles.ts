/* Greatly inspired by MUI's `CircularProgress` */

import styled, { css, keyframes } from "styled-components";
import { CircularProgressProps } from "./CircularProgress.types";

const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

function getCircularProgressRootStyles(value: CircularProgressProps["value"]) {
    if (!value) {
        return css`
            animation: ${circularRotateKeyframe} 1.4s linear infinite;
        `;
    }
}

function getCircularProgressCircleStyles(value: CircularProgressProps["value"]) {
    if (value) {
        return css`
            transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `;
    } else {
        return css`
            animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
        `;
    }
}

export const CircularProgressRoot = styled.span<CircularProgressProps>(
    ({ value }) => css`
        display: inline-block;
        ${getCircularProgressRootStyles(value)};
    `,
);

export const CircularProgressSvg = styled.svg(
    () => css`
        display: block;
    `,
);

export const CircularProgressCircle = styled.circle<CircularProgressProps>(
    ({ value }) => css`
        stroke: currentColor;
        stroke-linecap: round;
        ${getCircularProgressCircleStyles(value)};
    `,
);

export const CircularProgressContent = styled.div(
    () => css`
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

export const CircularProgressWrapper = styled.div(
    () => css`
        position: relative;
        display: inline-flex;
    `,
);
