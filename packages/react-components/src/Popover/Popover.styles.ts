import styled from "styled-components";
import { PopperStyles } from "./Popover.types";
import { getPopperPosition } from "./utils/getPopperPosition";
import { Paper } from "../Paper";

export const PopoverRoot = styled.div`
    position: relative;
    display: flex;
    width: fit-content;
`;

export const PopoverPopper = styled.div<PopperStyles>`
    position: absolute;
    margin: ${({ origin }) => `${origin.vertical}px ${origin.horizontal}px`};
    ${({ position }) => getPopperPosition(position)};
    z-index: ${(p) => p.theme.zIndex.popover};
`;

export const PopoverPaper = styled(Paper)``;

export const PopoverContent = styled.div`
    display: contents;
    cursor: default;
`;
