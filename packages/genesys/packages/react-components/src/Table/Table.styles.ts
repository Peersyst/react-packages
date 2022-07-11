import styled, { css } from "styled-components";
import { Typography } from "../Typography";
import { TableCellStyleProps, TableRootProps } from "./Table.types";
import { Row } from "../Row";
import { alpha } from "@peersyst/react-utils";
import { PopoverRoot } from "../Popover";

export const TableCell = styled.div<TableCellStyleProps>`
    width: ${(props) => props.width};
    min-width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    align-items: center;
    overflow: hidden;

    border-left: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};

    &:first-child {
        border-left: none;
    }

    ${PopoverRoot} {
        width: 100%;
    }
`;

export const TableText = styled(Typography).attrs({
    variant: "inherit",
})`
    word-break: break-word;
`;

export const TableRow = styled(Row)`
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};
    width: max-content;
    overflow: hidden;

    ${(p) =>
        p.onClick &&
        css`
            cursor: pointer;
            &:hover {
                background-color: ${alpha(p.theme.palette.primary, 0.4)};
            }
        `}

    &:last-child {
        border-bottom: none;
    }
`;

export const TableColumns = styled(TableRow)`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: inherit;
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

export const TableLoadMoreRow = styled(TableRow)`
    position: sticky;
    left: 0;

    align-items: center;
    justify-content: center;

    width: 100%;
    border-top: 1px solid ${(props) => alpha(props.theme.palette.text, 0.4)};
    border-bottom: 0;
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
    overflow: auto;
    flex: 1;
    height: 100%;
    background-color: ${(props) => props.theme.palette.background};
    border-radius: ${(props) => props.theme.borderRadius};
    border: ${(props) =>
        props.borders.outline && `1px solid ${alpha(props.theme.palette.text, 0.4)}`};
    border-collapse: collapse;

    ${TableRow} {
        min-height: ${(props) => props.rowHeight};
        min-height: ${(props) => props.rowHeight};

        border-bottom: ${(props) => !props.borders.horizontal && "none"};
    }

    ${TableCell} {
        border-left: ${(props) => !props.borders.vertical && "none"};
        border-right: ${(props) => !props.borders.vertical && "none"};
    }

    ${TableFooter} {
        min-height: ${(props) => props.footerHeight};
        min-height: ${(props) => props.footerHeight};

        border-top: ${(props) => !props.borders.horizontal && "none"};
    }

    ${TableColumns} {
        min-height: ${(props) => props.headerHeight};
        min-height: ${(props) => props.headerHeight};
    }

    ${TableLoadMoreRow} {
        border-top: ${(props) => !props.borders.horizontal && "none"};
    }
`;

export const PopoverPopperWrapper = styled.div`
    max-width: 300px;
    padding: 0.5rem;
`;