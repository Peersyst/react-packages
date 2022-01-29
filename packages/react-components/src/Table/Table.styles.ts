import styled from "styled-components";
import { Typography } from "../Typography";
import { TableCellStyleProps } from "./Table.types";
import { Row } from "../Row";
import { alpha } from "../utils/color";

export const TableRoot = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: fit-content;
    height: fit-content;
    background-color: ${(props) => props.theme.palette.background};
    border-radius: ${(props) => props.theme.borderRadius};
`;

export const TableCell = styled.div<TableCellStyleProps>`
    width: ${(props) => props.width}px;
    min-width: ${(props) => props.width}px;
    max-width: ${(props) => props.width}px;
`;

export const TableText = styled(Typography).attrs({
    variant: "inherit",
})``;

export const TableRow = styled(Row)`
    width: fit-content;
    box-sizing: border-box;
    padding: 0 20px;
    min-height: 52px;
    max-height: 52px;
    align-items: center;
    border-bottom: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};
`;

export const TableColumns = styled(TableRow)`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: inherit;
    min-height: 56px;
    max-height: 56px;
`;

export const TableColumnHeader = styled(TableCell)``;

export const TableTitle = styled(TableText)`
    font-weight: 500;
`;

export const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const TableFooter = styled(TableRow)`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: inherit;
    border-bottom: 0;
    border-top: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};
`;
