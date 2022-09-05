import styled, { css } from "styled-components";
import { Paper } from "../Paper";
import { AlertRootProps } from "@peersyst/react-components-core";
import { getLuminance } from "@peersyst/react-utils";

export const AlertRoot = styled(Paper)<AlertRootProps>(({ theme, type }) => {
    const backgroundColor =
        type && type !== "loading" ? theme.palette.status[type] : theme.palette.background;

    return css`
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        box-sizing: border-box;
        width: fit-content;
        min-height: 56px;
        min-width: 300px;
        max-width: 360px;
        padding: 14px;
        border-radius: ${theme.borderRadius};
        background-color: ${backgroundColor};
        color: ${getLuminance(backgroundColor) > 0.5 ? "#000" : "#FFF"};

        svg {
            font-size: 18px;
        }

        @media screen and (max-width: 400px) {
            min-width: calc(100vw - 48px);
            max-width: calc(100vw - 48px);
        }
    `;
});

export const AlertAction = styled.div`
    margin-left: auto;
`;
