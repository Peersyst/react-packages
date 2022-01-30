import styled, { css, keyframes } from "styled-components";
import { SkeletonProps } from "./Skeleton.types";
import { ColorScheme } from "../Theme";

interface SkeletonStyles {
    height: string | undefined;
    width: string | undefined;
    shape: NonNullable<SkeletonProps["shape"]>;
    animation: NonNullable<SkeletonProps["animation"]>;
    appearance?: ColorScheme;
    isLoading: boolean;
}

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }

  40% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const SkeletonRoot = styled.span<SkeletonStyles>`
  ${({ theme, appearance }) =>
      theme.palette.mode === "light" || appearance === "light"
          ? css`
                --skeleton-bg: rgba(0, 0, 0, 0.11);
                --skeleton-wave: linear-gradient(
                    90deg,
                    transparent,
                    rgba(0, 0, 0, 0.04),
                    transparent
                );
                --skeleton-pulse: rgba(0, 0, 0, 0.12);
            `
          : css`
                --skeleton-bg: rgba(255, 255, 255, 0.13);
                --skeleton-wave: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255, 255, 255, 0.08),
                    transparent
                );
                --skeleton-pulse: rgba(255, 255, 255, 0.14);
            `}
  }

  ${({ isLoading, animation, width, height, shape }) =>
      isLoading
          ? css`
      position: relative;
      isolation: isolate;
      display: block;
      max-width: ${width ? undefined : "max-content"};
      overflow: hidden;
      width: ${width};
      height: ${height};
      border-radius: ${({ theme }) => {
          switch (shape) {
              case "rectangular":
                  return 0;
              case "circular":
                  return "100%";
              case "stadium":
                  return theme.borderRadius;
          }
      }};
    
    }
    
    > * {
    opacity: 0;
    }
            
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: var(--skeleton-bg);
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;

      ${() => {
          if (animation === "wave")
              return css`
                  animation: 1.6s linear 0.5s infinite normal none running ${wave};
                  background: var(--skeleton-wave);
                  transform: translateX(-100%);
                  inset: 0;
              `;
          else if (animation === "pulse")
              return css`
                  background-color: var(--skeleton-pulse);
                  opacity: 0;
                  animation: 1.5s ease-in-out 0.5s infinite normal none running ${pulse};
              `;
          else return;
      }}
  `
          : css`
                display: contents;
            `}
`;
