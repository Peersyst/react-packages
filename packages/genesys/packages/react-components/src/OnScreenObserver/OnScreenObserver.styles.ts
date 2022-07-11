import styled from "styled-components";
import { OnScreenObserverWrapperProps } from "./OnScreenObserver.types";

export const OnScreenObserverWrapper = styled.div<OnScreenObserverWrapperProps>`
    display: contents;

    > * {
        margin-top: -${(p) => p.offset};
      padding-bottom: ${(p) => p.offset};
`;
