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
        width: auto;
        min-height: 56px;
        padding: 14px;
        border-radius: ${theme.borderRadius};
        background-color: ${backgroundColor};
        color: ${getLuminance(backgroundColor) > 0.5 ? "#000" : "#FFF"};

        svg {
            font-size: 18px;
        }
    `;
});

export const AlertAction = styled.div`
    margin-left: auto;
`;
