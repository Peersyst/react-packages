import styled, { css } from "styled-components";
import { Paper } from "../../Paper";

interface SelectMenuStyles {
    expandable: boolean;
}

export const SelectMenuRoot = styled(Paper)<SelectMenuStyles>(({ theme, expandable }) => {
    return css`
        margin-block: 0;
        z-index: ${theme.zIndex.selectMenu};
        position: ${expandable ? "unset" : "absolute"};
        top: 100%;
        width: 100%;
        max-height: 220px;
        overflow-y: auto;
        padding: 10px 0;
    `;
});
