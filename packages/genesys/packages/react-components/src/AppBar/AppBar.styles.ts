import styled, { css } from "styled-components";
import { AppBarStylesProps } from "./AppBar.types";
import { Paper } from "../Paper";

export const AppBarRoot = styled.header<AppBarStylesProps>(
    ({ theme, position }) => css`
        position: ${position};
        width: 100%;
        background-color: ${theme.palette.background};
        z-index: ${theme.zIndex.appBar};
    `,
);

export const AppBarContent = styled(Paper)`
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: inherit;
`;
