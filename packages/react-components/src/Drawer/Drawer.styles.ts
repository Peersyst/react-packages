import styled, { css } from "styled-components";
import { DrawerProps } from "./Drawer.types";
import { Paper } from "../Paper";

function formatSize(v: number | string): string {
    return typeof v === "string" ? v : v + "px";
}

export const DrawerMenu = styled(Paper)<{
    size: NonNullable<DrawerProps["size"]>;
    position: NonNullable<DrawerProps["position"]>;
}>`
    box-sizing: border-box;
    width: ${({ size: { width = "400px" } }) => formatSize(width)};
    height: ${({ size: { height = "100%" } }) => formatSize(height)};
    background-color: ${({ theme }) => theme.palette.background};

    position: fixed;
    ${({ position }) =>
        css`
            ${[position]}: 0;
        `};

    @media screen and (max-width: 650px) {
        width: ${({ size: { width = "400px", mobileWidth } }) =>
            mobileWidth ? formatSize(mobileWidth) : formatSize(width)};
        height: ${({ size: { height = "100%", mobileHeight } }) =>
            mobileHeight ? formatSize(mobileHeight) : formatSize(height)};
    }

    //Transitions
    ${({
        position,
        size: { width = "400px", height = "100%", mobileWidth = "100%", mobileHeight = "100%" },
    }) =>
        css`
      &.drawer-enter,
      &.drawer-appear {
        ${[position]}: ${"-" + (position === "top" ? formatSize(height) : formatSize(width))};
      }
      &.drawer-enter-active,
      &.drawer-appear-active {
        ${[position]}: 0;
        transition: ${position};
      }
      &.drawer-exit {
        ${[position]}: 0;
      }
      &.drawer-exit-active {
        ${[position]}: ${"-" + (position === "top" ? formatSize(height) : formatSize(width))};
        transition: ${position};
      }

      @media (max-width: 650px) {
        &.drawer-enter,
        &.drawer-appear {
          ${[position]}: ${
            "-" + (position === "top" ? formatSize(mobileHeight) : formatSize(mobileWidth))
        }
        }
        &.drawer-enter-active,
        &.drawer-appear-active {
          ${[position]}: 0};
          transition: ${position};
        }
        &.drawer-exit {
          ${[position]}: 0;
        }
        &.drawer-exit-active {
          ${[position]}: ${
            "-" +
            (position === "top"
                ? mobileHeight
                    ? formatSize(mobileHeight)
                    : formatSize(height)
                : mobileWidth
                ? formatSize(mobileWidth)
                : formatSize(width))
        }
        }
      }
    `}
`;
