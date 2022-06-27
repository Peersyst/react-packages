import styled, { css } from "styled-components";
import { TypographyStyleProps } from "./Typography.types";
import { ThemeFonts } from "../styles";

export const TypographyRoot = styled.div<TypographyStyleProps>`
    display: block;
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    line-height: normal;
    ${(props) => css(props.variantStyles)};
    text-transform: ${(props) => props.textTransform};
    text-align: ${(props) => props.textAlign};
    font-style: ${(props) => props.fontStyle};
    font-weight: ${(props) => props.fontWeight};
    font-family: ${(props) => props.font && props.theme.fonts?.[props.font as keyof ThemeFonts]};
    ${(props) =>
        props.singleLine &&
        css`
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-x: hidden;
        `};

    &.Light {
        opacity: 0.7;
    }
`;
