import styled from "styled-components";
import { Typography } from "../Typography";
import { TableCellStyleProps, TableRootProps } from "./Table.types";
import { Row } from "../Row";
import { alpha } from "@peersyst/react-utils";

export const TableCell = styled.div<TableCellStyleProps>`
    width: ${(props) => props.width};
    min-width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    align-items: center;

    border-left: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};

    &:first-child {
        border-left: none;
    }
`;

export const TableText = styled(Typography).attrs({
    variant: "inherit",
})``;

export const TableRow = styled(Row)`
    width: fit-content;
    box-sizing: border-box;
    min-height: 52px;
    max-height: 52px;
    border-bottom: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};

    &:last-child {
        border-bottom: none;
    }
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

    display: flex;
    align-items: center;

    left: 0;
    width: 100%;
    padding: 0 16px;

    background-color: inherit;
    border-bottom: 0;
    border-top: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};
`;

export const TableRoot = styled.div<TableRootProps>`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: fit-content;
    height: fit-content;
    background-color: ${(props) => props.theme.palette.background};
    border-radius: ${(props) => props.theme.borderRadius};
    border: ${(props) =>
        props.borders.outline && `1px solid ${alpha(props.theme.palette.text, 0.4)}`};
    border-collapse: collapse;

    ${TableRow} {
        border-bottom: ${(props) => !props.borders.horizontal && "none"};
    }

    ${TableCell} {
        border-left: ${(props) => !props.borders.vertical && "none"};
        border-right: ${(props) => !props.borders.vertical && "none"};
    }

    ${TableFooter} {
        border-top: ${(props) => !props.borders.horizontal && "none"};
    }
`;
