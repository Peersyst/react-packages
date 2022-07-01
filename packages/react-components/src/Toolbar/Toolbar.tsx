import styled from "styled-components";
import { cx } from "@peersyst/react-utils";
import { createComponent } from "@peersyst/react-components-core";

const Toolbar = styled.div.attrs(({ className }) => ({ className: cx("Toolbar", className) }))`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
    height: 64px;
    width: 100%;

    ${(props) => props.theme.breakpoints.down(650)} {
        height: 56px;
    }
`;

export default createComponent("Toolbar", Toolbar);
