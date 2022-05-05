import styled, { css } from "styled-components";
import { Paper } from "../../Paper";

interface SelectMenuStyles {
    expandable: boolean;
}

export const SelectMenuRoot = styled(Paper)<SelectMenuStyles>(({ theme, expandable }) => {
    console.log(expandable);
    return css`
        margin-block: 0;
        z-index: ${theme.zIndex.selectMenu};
        position: ${expandable ? "relative" : "absolute"};
        top: 100%;
        width: 100%;
        max-height: 220px;
        overflow-y: scroll;
        padding: 10px 0;
    `;
});
