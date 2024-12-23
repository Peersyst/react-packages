import { useState, useEffect } from "react";
import { LoadingOverlayRect, TableOverlayProps } from "./TableOverlay.types";
import { TableOverlayRoot } from "./TableOverlay.styles";
import clsx from "clsx";

const TableLoadingOverlay = ({
    containerRef,
    headerRef,
    children,
    className,
    style = {},
}: TableOverlayProps): JSX.Element => {
    const [overlayRect, setOverlayRect] = useState<LoadingOverlayRect>({
        top: undefined,
        width: undefined,
        height: undefined,
    });

    const overlayRectIsInitialized =
        overlayRect.top !== undefined &&
        overlayRect.width !== undefined &&
        overlayRect.height !== undefined;

    useEffect(() => {
        const currentContainerRef = containerRef.current;

        if (currentContainerRef)
            new ResizeObserver(() => {
                if (headerRef.current !== undefined) {
                    const newLoadingOverlayHeight =
                        currentContainerRef.clientHeight - headerRef.current.clientHeight;

                    if (
                        currentContainerRef.clientWidth !== overlayRect.width ||
                        newLoadingOverlayHeight !== overlayRect.height
                    )
                        setOverlayRect((rect) => ({
                            ...rect,
                            width: currentContainerRef.clientWidth,
                            height: newLoadingOverlayHeight,
                        }));
                }
            }).observe(currentContainerRef);
    }, [containerRef]);

    useEffect(() => {
        const currentHeaderRef = headerRef.current;

        if (currentHeaderRef)
            new ResizeObserver(() => {
                if (containerRef.current !== undefined) {
                    const newLoadingOverlayHeight =
                        containerRef.current.clientHeight - currentHeaderRef.clientHeight;

                    if (
                        currentHeaderRef.clientHeight !== overlayRect.top ||
                        newLoadingOverlayHeight !== overlayRect.height
                    )
                        setOverlayRect((rect) => ({
                            ...rect,
                            top: currentHeaderRef.clientHeight,
                            height: newLoadingOverlayHeight,
                        }));
                }
            }).observe(currentHeaderRef);
    }, [headerRef]);

    return (
        <TableOverlayRoot
            className={clsx("TableOverlay", className)}
            style={{
                ...style,
                display: overlayRectIsInitialized ? "flex" : "none",
                top: overlayRect.top,
                width: overlayRect.width,
                height: overlayRect.height,
            }}
        >
            {children}
        </TableOverlayRoot>
    );
};

export default TableLoadingOverlay;
