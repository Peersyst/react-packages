import styled from "styled-components";
import { Paper } from "../Paper";

export const PopoverRoot = styled.div`
    position: relative;
    display: flex;
    width: fit-content;
`;

export const PopperArrow = styled(Paper)`
    --popper-arrow-size: 10px;

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
    }
`;

export const PopoverPaper = styled(Paper)``;

export const PopoverPopper = styled.div`
    z-index: ${(p) => p.theme.zIndex.popover};

    &[data-popper-placement^="top"] > ${PopoverPaper} ${PopperArrow} {
        bottom: -4px;
        border-top: 0;
        border-left: 0;
    }

    &[data-popper-placement^="bottom"] > ${PopoverPaper} ${PopperArrow} {
        top: -6px;
        border-bottom: 0;
        border-right: 0;
    }

    &[data-popper-placement^="left"] > ${PopoverPaper} ${PopperArrow} {
        right: -4px;
        border-bottom: 0;
        border-left: 0;
    }

    &[data-popper-placement^="right"] > ${PopoverPaper} ${PopperArrow} {
        left: -6px;
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
