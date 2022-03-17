import styled, { css } from "styled-components";
import { RangeSliderStyles } from "./RangeSlider.types";

const sliderColor = css<RangeSliderStyles>`
    color: ${({ disabled, theme }) => (disabled ? theme.palette.disabled : theme.palette.primary)};
`;

export const RangeSliderRoot = styled.div<RangeSliderStyles>`
    position: relative;
    isolation: isolate;

    ${sliderColor};

    height: 4px;
    width: calc(100% - 40px);
    margin-left: 20px;
    padding: 12px 0;
    box-sizing: content-box;
    border-radius: 12px;
    cursor: pointer;
`;

export const RangeSliderRail = styled.span`
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

export const RangeSliderTrack = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    height: inherit;

    border-radius: inherit;
    border: 1px solid currentColor;
    background-color: currentColor;
`;

const thumbStyles = css<RangeSliderStyles>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: ${({ theme }) => theme.shadows[5]};

    &:hover {
        transform: ${({ disabled }) => !disabled && "scale(1.1)"};
    }
`;

export const RangeSliderInput = styled.input<RangeSliderStyles>`
    cursor: ${({ disabled }) => !disabled && "pointer"};
    position: absolute;
    border: 0;
    height: 100%;
    margin: 0;
    top: 1px;
    padding: 0;

    white-space: nowrap;
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
