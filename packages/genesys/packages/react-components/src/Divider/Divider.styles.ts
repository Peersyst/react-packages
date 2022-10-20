import styled, { css } from "styled-components";
import { Property } from "csstype";
import { Row } from "../Row";
import { DividerProps } from "./Divider.types";

export const DividerRoot = styled.div<{
    height: Property.Height;
    width: NonNullable<DividerProps["width"]>;
    color?: string;
}>`
    ${({ height, width, color }) => css`
        height: ${height};
        background-color: ${color || "currentColor"};

        width: ${() => {
            switch (width) {
                case "sm":
                    return "100px";
                case "md":
                    return "250px";
                case "lg":
                    return "500px";
                case "full-width":
                    return "100%";
            }
        }};
    `}
`;

export const DividerWithChildren = styled(Row)<{
    width: NonNullable<DividerProps["width"]>;
}>`
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;

    width: ${({ width }) => {
        switch (width) {
            case "sm":
                return "100px";
            case "md":
                return "250px";
            case "lg":
                return "500px";
            case "full-width":
                return "100%";
        }
    }};
`;
