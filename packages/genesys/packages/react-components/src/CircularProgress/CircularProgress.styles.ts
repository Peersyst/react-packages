import styled, { css, keyframes } from "styled-components";

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

export const CircularProgressRoot = styled.span(
    ({ theme }) => css`
        display: inline-block;
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
        color: red;
    `,
);

export const CircularProgressSvg = styled.svg(
    ({ theme }) => css`
        display: block;
    `,
);

export const CircularProgressCircle = styled.circle(
    ({ theme }) => css`
        stroke: currentColor;
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
    `,
);
