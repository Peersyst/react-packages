import { RefObject, useCallback, useEffect, useMemo, useState } from "react";

export default function (
    active: boolean,
    address: string,
    gap: number,
    rowRef: RefObject<HTMLDivElement>,
    addressRef: RefObject<HTMLAnchorElement>,
    copyButtonRef: RefObject<HTMLButtonElement>,
): number {
    const [autoLength, setAutoLength] = useState(address.length);
    const [resized, setResized] = useState(false);

    const setAddressLength = useCallback(
        (rowE: Element) => {
            if (resized) setResized(false);
            else if (addressRef.current) {
                const rowWidth = rowE.clientWidth;
                const addressWidth = addressRef.current.clientWidth;
                const copyButtonWidth = copyButtonRef.current?.clientWidth || 0;

                if (rowWidth !== addressWidth + gap + copyButtonWidth) {
                    setAutoLength((oldAutoLength) => {
                        const computedWidth = Math.floor(
                            (oldAutoLength * (rowWidth - gap - copyButtonWidth)) / addressWidth,
                        );
                        return Math.max(Math.min(computedWidth, address.length), 1);
                    });
                    setResized(true);
                }
            }
        },
        [address, gap, addressRef, copyButtonRef, resized],
    );

    const observer = useMemo(
        () =>
            new ResizeObserver(([rowObs]) => {
                setAddressLength(rowObs.target);
            }),
        [setAddressLength],
    );

    useEffect(() => {
        const currentRowRef = rowRef.current;
        if (active && currentRowRef) observer.observe(currentRowRef);
        return () => {
            if (active && currentRowRef) observer.unobserve(currentRowRef);
        };
    }, [observer, rowRef, active]);

    useEffect(() => {
        if (active && rowRef.current) setAddressLength(rowRef.current);
    }, [address, gap, addressRef, rowRef, copyButtonRef, setAddressLength, active]);

    return autoLength;
}
