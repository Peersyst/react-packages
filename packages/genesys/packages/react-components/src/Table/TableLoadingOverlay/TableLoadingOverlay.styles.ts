import styled from "styled-components";
import { css } from "styled-components";
import { TableLoadingOverlayRootProps } from "./TableLoadingOverlay.types";
import { TableOverlay } from "../TableOverlay";

export const TableLoadingOverlayRoot = styled(TableOverlay)<TableLoadingOverlayRootProps>(
    ({ theme, loading }) => css`
        opacity: ${loading ? 1 : 0};

        color: ${theme.palette.primary};
        font-size: 3rem;

        transition: opacity 200ms;
    `,
);
