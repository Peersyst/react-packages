import styled from "styled-components";
import { Paper } from "../Paper";

export const PopoverRoot = styled.div`
    position: relative;
    display: flex;
    width: fit-content;
`;

export const PopperArrow = styled(Paper)`
    --popper-arrow-size: 8px;

    position: absolute;
    width: var(--popper-arrow-size);
    height: var(--popper-arrow-size);
    background: inherit;
    border: inherit;
    visibility: hidden;

    &:before {
        content: "";
        position: absolute;
        width: var(--popper-arrow-size);
        height: var(--popper-arrow-size);
        background: inherit;
        border: inherit;
        visibility: visible;
        transform: rotate(45deg);
        box-sizing: border-box;
    }
`;

export const PopoverPaper = styled(Paper)`
    border: 1px solid green;
`;

export const PopoverPopper = styled.div`
    z-index: ${(p) => p.theme.zIndex.popover};

    &[data-popper-placement^="top"] > ${PopoverPaper} ${PopperArrow} {
        bottom: calc(var(--popper-arrow-size) * -0.4);
        border-top: 0;
        border-left: 0;
    }

    &[data-popper-placement^="bottom"] > ${PopoverPaper} ${PopperArrow} {
        top: calc(var(--popper-arrow-size) * -0.6);
        border-bottom: 0;
        border-right: 0;
    }

    &[data-popper-placement^="left"] > ${PopoverPaper} ${PopperArrow} {
        right: calc(var(--popper-arrow-size) * -0.4);
        border-bottom: 0;
        border-left: 0;
    }

    &[data-popper-placement^="right"] > ${PopoverPaper} ${PopperArrow} {
        left: calc(var(--popper-arrow-size) * -0.6);
        border-top: 0;
        border-right: 0;
    }
`;

export const PopoverContent = styled.div`
    position: relative;
    display: contents;
    cursor: default;
`;

export const PopoverSnitch = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;
