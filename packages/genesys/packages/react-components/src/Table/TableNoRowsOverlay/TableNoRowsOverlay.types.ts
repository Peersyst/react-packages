import { ReactNode } from "react";
import { TableOverlayProps } from "../TableOverlay";
export interface TableNoRowsProps extends Omit<TableOverlayProps, "children"> {
    noRowsElement?: ReactNode;
}
