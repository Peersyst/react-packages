import styled, { css } from "styled-components";
import { Button } from "../Button";
import { getLuminance } from "@peersyst/react-utils";

export const ToggleButtonRoot = styled(Button)(
    ({ theme }) => css`
        transition: color 100ms, background-color 100ms;
        &.Selected {
            background-color: ${theme.palette.primary};
            color: ${getLuminance(theme.palette.primary) > 0.7 ? "black" : "white"};
        }
    `,
);
