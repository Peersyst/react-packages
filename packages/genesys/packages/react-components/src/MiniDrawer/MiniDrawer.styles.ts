import styled, { css } from "styled-components";
import { Drawer } from "../Drawer";
import { MiniDrawerRootProps } from "./MiniDrawer.types";

function formatSize(v: number | string): string {
    return typeof v === "string" ? v : v + "px";
}

export const MiniDrawerRoot = styled(Drawer)<MiniDrawerRootProps>(
    ({
        size: { size = 300, mobileSize: mobileSizeProp } = {},
        position,
        collapsedSize,
        transitionDuration,
    }) => {
        const isHorizontal = position === "left" || position === "right";

        const mobileSize = mobileSizeProp ?? size;
        const width = isHorizontal ? size : "100%";
        const mobileWidth = isHorizontal ? mobileSize : "100%";
        const height = !isHorizontal ? size : "100%";
        const mobileHeight = !isHorizontal ? mobileSize : "100%";

        return css`
            transition: width ${transitionDuration}, height ${transitionDuration} !important;
            width: ${formatSize(width)};
            height: ${formatSize(height)};

            @media screen and (max-width: 650px) {
                width: ${formatSize(mobileWidth)};
                height: ${formatSize(mobileHeight)};
            }

            overflow-x: ${isHorizontal && "hidden"};
            overflow-y: ${!isHorizontal && "hidden"};

            &.Collapsed {
                width: ${isHorizontal && formatSize(collapsedSize)};
                height: ${!isHorizontal && formatSize(collapsedSize)};
            }
        `;
    },
);
