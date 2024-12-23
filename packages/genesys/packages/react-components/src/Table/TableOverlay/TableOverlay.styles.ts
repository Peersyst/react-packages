import { alpha } from "@peersyst/react-utils";
import styled from "styled-components";
import { css } from "styled-components";

export const TableOverlayRoot = styled.div(
    ({ theme }) => css`
        position: absolute;

        align-items: center;
        justify-content: center;

        pointer-events: none;

        background-color: ${alpha(theme.palette.text, 0.1)};
    `,
);
