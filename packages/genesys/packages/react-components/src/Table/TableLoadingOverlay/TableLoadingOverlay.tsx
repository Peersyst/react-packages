import { TableLoadingOverlayProps } from "./TableLoadingOverlay.types";
import { useTheme } from "@peersyst/react-components-core";
import { TableLoadingOverlayRoot } from "./TableLoadingOverlay.styles";
import clsx from "clsx";

const TableLoadingOverlay = ({
    loading = false,
    className,
    ...rest
}: TableLoadingOverlayProps): JSX.Element => {
    const { loader: Loader } = useTheme();

    return (
        <TableLoadingOverlayRoot
            loading={loading}
            className={clsx("TableLoadingOverlay", className)}
            {...rest}
        >
            <Loader />
        </TableLoadingOverlayRoot>
    );
};

export default TableLoadingOverlay;
