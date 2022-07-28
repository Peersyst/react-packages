import styled, { css } from "styled-components";
import { SliderStyles } from "@peersyst/react-components-core";

const sliderColor = css<SliderStyles>`
    color: ${({ disabled, theme }) => (disabled ? theme.palette.disabled : theme.palette.primary)};
`;

export const SliderRoot = styled.span<SliderStyles>`
    position: relative;
    isolation: isolate;

    display: inline-block;

    ${sliderColor};

    height: 4px;
    width: 100%;
    padding: 12px 0;
    box-sizing: content-box;
    border-radius: 12px;
    cursor: pointer;

    &.Disabled {
        cursor: default;
        pointer-events: none;
        * {
            pointer-events: none;
        }
    }
`;

export const SliderRail = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    width: 100%;
    height: inherit;

    border-radius: inherit;
    background-color: currentColor;
    opacity: 0.5;
`;

export const SliderTrack = styled.span`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    height: inherit;

    border-radius: inherit;
    border: 1px solid currentColor;
    background-color: currentColor;
`;

const thumbStyles = css<SliderStyles>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: ${({ theme }) => theme.shadows[5]};

    &:hover {
        transform: ${({ disabled }) => !disabled && "scale(1.1)"};
    }
`;

export const SliderInput = styled.input<SliderStyles>`
    cursor: ${({ disabled }) => !disabled && "pointer"};
    position: absolute;
    top: 1px;
    left: -9px;
    border: 0;
    height: 100%;
    margin: -1px;
    padding: 0;

    white-space: nowrap;
    width: calc(100% + 20px);
    direction: ltr;

    -webkit-appearance: none;
    background-color: transparent;
    color: inherit;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${thumbStyles};
    }

    &::-moz-range-thumb {
        pointer-events: none;
        ${thumbStyles};
    }
`;
