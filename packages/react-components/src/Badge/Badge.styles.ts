import styled, { css, CSSObject } from "styled-components";
import { BadgeItemProps, BadgeOverlap, BadgePosition } from "./Badge.types";
import { getLuminance } from "@peersyst/react-utils";

export const BadgeRoot = styled.span`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    flex-shrink: 0;
`;

const getBadgePosition = (position: BadgePosition, overlap: BadgeOverlap): CSSObject => {
    const value = overlap === "circular" ? "14%" : 0;

    return {
        top: position.vertical === "top" ? value : undefined,
        bottom: position.vertical === "bottom" ? value : undefined,
        left: position.horizontal === "left" ? value : undefined,
        right: position.horizontal === "right" ? value : undefined,
    };
};

export const BadgeItem = styled.span<BadgeItemProps>(
    ({ theme, position, hasContent, overlap }) => css`
        position: absolute;
        ${getBadgePosition(position, overlap)};
        z-index: 1;
        display: flex;
        flex-flow: row wrap;
        -webkit-box-pack: center;
        place-content: center;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 6px;
        height: ${hasContent ? "20px" : "8px"};
        min-width: ${hasContent ? "20px" : "8px"};
        border-radius: 10px;
        background-color: ${theme.palette.primary};
        color: ${getLuminance(theme.palette.primary) > 0.7 ? "black" : "white"};
    `,
);
