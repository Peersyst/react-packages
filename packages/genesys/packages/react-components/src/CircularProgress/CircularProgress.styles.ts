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

function getCircularProgressRootStyles(variant: CircularProgressProps["variant"]) {
    if (variant === "indeterminate") {
        return css`
            animation: ${circularRotateKeyframe} 1.4s linear infinite;
        `;
    }
}

function getCircularProgressCircleStyles(variant: CircularProgressProps["variant"]) {
    if (variant === "determinate") {
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
    ({ variant }) => css`
        display: inline-block;
        ${getCircularProgressRootStyles(variant)};
    `,
);

export const CircularProgressSvg = styled.svg(
    () => css`
        display: block;
    `,
);

export const CircularProgressCircle = styled.circle<CircularProgressProps>(
    ({ variant }) => css`
        stroke: currentColor;
        stroke-linecap: round;
        ${getCircularProgressCircleStyles(variant)};
    `,
);
