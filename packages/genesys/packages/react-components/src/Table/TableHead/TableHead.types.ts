import { TableAlignment } from "../Table.types";

export interface TableHeaderProps {
    canSort: boolean;
}

export interface TableHeaderContentProps {
    alignment: TableAlignment;
}

export interface TableHeaderTitleProps {
    alignment: TableAlignment;
}

export interface TableSortButtonProps {
    active: boolean;
}

export interface TableHeaderSortButtonContainerProps {
    isSorted: boolean;
}
