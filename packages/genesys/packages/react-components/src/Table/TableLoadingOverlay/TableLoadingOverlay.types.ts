import { TableOverlayProps } from "../TableOverlay";

export interface TableLoadingOverlayProps extends Omit<TableOverlayProps, "children"> {
    loading?: boolean;
}

export interface TableLoadingOverlayRootProps {
    loading: boolean;
}
