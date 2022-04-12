import styled, { css } from "styled-components";
import { DrawerProps } from "./Drawer.types";
import { Paper } from "../Paper";

function formatSize(v: number | string): string {
    return typeof v === "string" ? v : v + "px";
}

export const DrawerMenu = styled(Paper)<{
    size: NonNullable<DrawerProps["size"]>;
    position: NonNullable<DrawerProps["position"]>;
}>(({ size: { size = "300px", mobileSize: mobileSizeProp }, position }) => {
    const mobileSize = mobileSizeProp ?? size;
    const width = position === "left" || position === "right" ? size : "100%";
    const mobileWidth = position === "left" || position === "right" ? mobileSize : "100%";
    const height = position === "top" || position === "bottom" ? size : "100%";
    const mobileHeight = position === "top" || position === "bottom" ? mobileSize : "100%";

    return css`
        box-sizing: border-box;
        width: ${formatSize(width)};
        height: ${formatSize(height)};
        background-color: ${({ theme }) => theme.palette.background};
        overflow: auto;

        position: fixed;
        ${[position]}: 0;

        @media screen and (max-width: 650px) {
            width: ${formatSize(mobileWidth)};
            height: ${formatSize(mobileHeight)};
        }

        //Transitions
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
    `;
});
