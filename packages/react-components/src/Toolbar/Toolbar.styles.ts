import styled from "styled-components";
import { cx } from "@peersyst/react-utils";

export const ToolbarRoot = styled.div.attrs(({ className }) => ({
    className: cx("Toolbar", className),
}))`
    :root {
        --toolbar-height: 64px;
    }

    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
    height: var(--toolbar-height);
    width: 100%;

    ${(props) => props.theme.breakpoints.down(650)} {
        :root {
            --toolbar-height: 56px;
        }
    }
`;
