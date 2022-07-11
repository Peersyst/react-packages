import styled from "styled-components";
import { Paper } from "../Paper";

export const ModalRoot = styled(Paper)`
    max-width: 80%;
    max-height: 80%;
    padding: 40px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.background};
    border-radius: ${(props) => props.theme.borderRadius};
    overflow: auto;

    position: relative;
    isolation: isolate;

    @media (max-width: 650px) {
        min-width: unset;
        max-width: unset;
        max-height: unset;
        width: 100vw;
        height: 100vh;
    }
`;
