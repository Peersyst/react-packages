import styled, { css } from "styled-components";
import { Paper } from "../../Paper";

interface SelectMenuStyles {
    expandable: boolean;
}

export const SelectMenuRoot = styled(Paper)<SelectMenuStyles>`
    margin-block: 0;
    z-index: ${(p) => p.theme.zIndex.selectMenu};

    ${({ expandable }) =>
        !expandable &&
        css`
            position: absolute;
            top: 100%;
        `};

    width: 100%;
    max-height: 220px;
    overflow-y: scroll;
    padding: 10px 0;
`;
