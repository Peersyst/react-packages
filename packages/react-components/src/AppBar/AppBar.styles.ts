import styled from "styled-components";
import { AppBarStylesProps } from "./AppBar.types";
import { Paper } from "../Paper";

export const AppBarRoot = styled.header<AppBarStylesProps>`
    position: ${(props) => props.position};
    width: 100%;
    background-color: ${(props) => props.theme.palette.background};
`;

export const AppBarContent = styled(Paper)`
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: inherit;
`;
