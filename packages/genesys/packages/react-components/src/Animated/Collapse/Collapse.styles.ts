import styled from "styled-components";
import {
    CollapseRootProps,
    CollapseWrapperInnerProps,
    CollapseWrapperProps,
} from "./Collapse.types";

export const CollapseRoot = styled.div<CollapseRootProps>(({ orientation }) => ({
    height: 0,
    overflow: "hidden",
    ...(orientation === "horizontal" && {
        height: "auto",
        width: 0,
    }),
}));

export const CollapseWrapper = styled.div<CollapseWrapperProps>(({ orientation }) => ({
    display: "flex",
    width: "100%",
    ...(orientation === "horizontal" && {
        width: "auto",
        height: "100%",
    }),
}));

export const CollapseWrapperInner = styled.div<CollapseWrapperInnerProps>(({ orientation }) => ({
    width: "100%",
    ...(orientation === "horizontal" && {
        width: "auto",
        height: "100%",
    }),
}));
