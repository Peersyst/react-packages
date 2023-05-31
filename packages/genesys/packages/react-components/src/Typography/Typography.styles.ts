import styled, { css } from "styled-components";
import { TypographyRootProps } from "./Typography.types";
import { ThemeFonts } from "@peersyst/react-components-core";

export const TypographyRoot = styled.div<TypographyRootProps>(
    ({
        theme,
        variantStyles,
        textTransform,
        textAlign,
        fontStyle,
        fontWeight,
        font,
        color,
        numberOfLines = 0,
    }) => css`
        overflow: hidden;
        display: block;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        line-height: normal;

        ${css(variantStyles)};

        text-transform: ${textTransform};
        text-align: ${textAlign};
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
        font-family: ${font && theme.fonts?.[font as keyof ThemeFonts]};
        ${numberOfLines &&
        css`
            width: 100%;
            -webkit-line-clamp: ${numberOfLines};
            text-overflow: ellipsis;
            overflow-x: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            word-wrap: break-word; /* Important for long words! */
        `};

        color: ${color};

        &.Light {
            opacity: 0.7;
        }
    `,
);
