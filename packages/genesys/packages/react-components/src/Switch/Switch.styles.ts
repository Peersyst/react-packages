import styled from "styled-components";
import { SwitchStyleProps } from "./Switch.types";
import { emphasize } from "@peersyst/react-utils";

export const SwitchRoot = styled.span<SwitchStyleProps>`
    display: block;
    flex-shrink: 0;
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    width: 60px;
    height: 32px;
    border-radius: 36px;
    cursor: pointer;
    transition: 0.4s;

    &.Disabled,
    &.Readonly {
        cursor: default;
        pointer-events: none;
        * {
            pointer-events: none;
        }
    }

    &.Disabled {
        opacity: 0.6;
    }
`;

export const SwitchTrack = styled.span<SwitchStyleProps>`
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 4px;
    background-color: ${({ theme, checked }) =>
        checked ? theme.palette.primary : emphasize(theme.palette.text, 0.5)};
    transition: background-color 0.2s;
    border-radius: inherit;
    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.25);
`;

export const SwitchThumb = styled.span<SwitchStyleProps>`
    display: block;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadows[2]};
    transform: ${({ checked }) => checked && "translateX(100%)"};
    transition: transform 0.2s;
`;

export const SwitchChildren = styled.div`
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
