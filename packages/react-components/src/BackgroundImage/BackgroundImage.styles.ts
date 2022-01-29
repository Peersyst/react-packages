import styled, { css } from "styled-components";
import { BackgroundImageProps } from "./BackgroundImage.types";
import { cx } from "../utils/cx";

export const BackgroundImageRoot = styled.div.attrs(({ className }) => ({
    className: cx("BackgroundImage", className),
}))<BackgroundImageProps>`
    position: relative;
    isolation: isolate;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ${({ src }: BackgroundImageProps) => css`
        background-image: ${src ? "url(" + src + ")" : undefined};
        background-color: ${!src ? "#979797" : undefined};
    `}

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: ${({ filter }) => filter};
    }
`;
