import styled from "styled-components";
import { TabIndicatorStyles } from "./TabIndicator.types";

export const TabIndicatorRoot = styled.div<TabIndicatorStyles>`
    position: absolute;
    left: ${({ position }) => position + "px"};
    bottom: 0;
    z-index: 2;

    height: 2px;
    width: ${({ width }) => width + "px"};
    background-color: ${({ theme }) => theme.palette.primary};

    transition: all 0.3s ease;
`;
