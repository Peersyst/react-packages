import styled, { css } from "styled-components";
import { ColorInputDisplayProps, ColorInputRootProps } from "./ColorInput.types";
import { Row } from "../Row";
import { TextField } from "../TextField";

export const ColorInputRoot = styled(Row).attrs({
    alignItems: "center",
    gap: 16,
})<ColorInputRootProps>(
    ({ hasLabel }) => css`
        position: relative;

        width: ${hasLabel && "100%"};

        > input {
            position: absolute;
            opacity: 0;
            z-index: -1;
        }
    `,
);

export const ColorInputDisplay = styled.span<ColorInputDisplayProps>(
    ({ theme, active, disabled }) => css`
        height: 36px;
        width: 36px;
        border-radius: ${theme.borderRadius};
        opacity: ${disabled ? 0.6 : 1};

        cursor: ${active && "pointer"};
    `,
);

export const ColorInputTextField = styled(TextField)`
    flex: 1;
`;
