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

    const setAddressLength = useCallback(
        (rowE: Element) => {
            if (addressRef.current) {
                const rowWidth = rowE.clientWidth;
                const addressWidth = addressRef.current?.clientWidth || 0;
                const copyButtonWidth = copyButtonRef.current?.clientWidth || 0;

                const computedWidth = Math.floor(
                    (autoLength * (rowWidth - gap - copyButtonWidth)) / addressWidth,
                );
                const newLength = Math.max(Math.min(computedWidth, address.length), 1);

                if (newLength > autoLength + 1 || newLength < autoLength) {
                    setAutoLength(newLength);
                }
            }
        },
        [address, gap, addressRef, copyButtonRef, autoLength],
    );

    const observer = useMemo(() => {
        return new ResizeObserver(([rowObs]) => {
            setAddressLength(rowObs.target);
        });
    }, [setAddressLength]);

    useEffect(() => {
        const currentRowRef = rowRef.current;
        if (active && currentRowRef) observer.observe(currentRowRef);
        return () => {
            if (active && currentRowRef) observer.disconnect();
        };
    }, [rowRef, active]);

    useEffect(() => {
        if (active && rowRef.current) setAddressLength(rowRef.current);
    }, [rowRef, setAddressLength, active]);

    return autoLength;
}
