import { useState, useEffect } from "react";
import { TableLoadingOverlayRect, TableOverlayProps } from "./TableOverlay.types";
import { TableOverlayRoot } from "./TableOverlay.styles";
import clsx from "clsx";

const TableLoadingOverlay = ({
    containerRef,
    headerRef,
    children,
    className,
    style = {},
}: TableOverlayProps): JSX.Element => {
    const [loadingOverlayRect, setLoadingOverlayRect] = useState<TableLoadingOverlayRect>({
        top: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const currentContainerRef = containerRef.current;

        if (currentContainerRef)
            new ResizeObserver(() => {
                const newLoadingOverlayHeight =
                    currentContainerRef.clientHeight - (headerRef.current?.clientHeight || 0);

                if (
                    currentContainerRef.clientWidth !== loadingOverlayRect.width ||
                    newLoadingOverlayHeight !== loadingOverlayRect.height
                )
                    setLoadingOverlayRect((rect) => ({
                        ...rect,
                        width: currentContainerRef.clientWidth,
                        height: newLoadingOverlayHeight,
                    }));
            }).observe(currentContainerRef);
    }, [containerRef]);

    useEffect(() => {
        const currentHeaderRef = headerRef.current;

        if (currentHeaderRef)
            new ResizeObserver(() => {
                const newLoadingOverlayHeight =
                    (containerRef.current?.clientHeight || 0) - currentHeaderRef.clientHeight;

                if (
                    currentHeaderRef.clientHeight !== loadingOverlayRect.top ||
                    newLoadingOverlayHeight !== loadingOverlayRect.height
                )
                    setLoadingOverlayRect((rect) => ({
                        ...rect,
                        top: currentHeaderRef.clientHeight,
                        height: newLoadingOverlayHeight,
                    }));
            }).observe(currentHeaderRef);
    }, [headerRef]);

    return (
        <TableOverlayRoot
            className={clsx("TableOverlay", className)}
            style={{
                ...style,
                top: loadingOverlayRect.top,
                width: loadingOverlayRect.width,
                height: loadingOverlayRect.height,
            }}
        >
            {children}
        </TableOverlayRoot>
    );
};

export default TableLoadingOverlay;
