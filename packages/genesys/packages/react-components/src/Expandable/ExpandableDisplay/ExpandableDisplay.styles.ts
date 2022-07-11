import styled, { css } from "styled-components";
import { ExpandableComponentProps } from "./ExpandableDisplay.types";
import { ChevronDownIcon } from "../../assets/icons";

export const ExpandableDisplayRoot = styled.div<{ reverse: boolean }>`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    min-height: 36px;
    padding: 0 10px;
    border-bottom: solid 1px ${({ theme }) => theme.palette.text};
    cursor: pointer;
    user-select: none;

    ${({ reverse }) =>
        reverse &&
        css`
            flex-direction: row-reverse;
        `}
`;

export const ExpandableDropdown = styled(ChevronDownIcon)<ExpandableComponentProps>`
    font-size: 0.7em;
    transform: ${({ open }) => open && "scale(-1)"};
`;
