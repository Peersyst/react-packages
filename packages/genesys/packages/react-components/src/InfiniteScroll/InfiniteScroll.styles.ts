import styled from "styled-components";
import { Row } from "../Row";
import { InfiniteScrollLoaderProps } from "./InfiniteScroll.types";

export const InfiniteScrollLoader = styled(Row).attrs({
    justifyContent: "center",
    alignItems: "center",
})<InfiniteScrollLoaderProps>`
    margin: 40px 0;
    opacity: ${(p) => (p.visible ? 1 : 0)};
`;
