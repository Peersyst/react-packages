import { RefObject, useCallback, useEffect, useMemo, useState } from "react";

export default function (
    active: boolean,
    hash: string,
    gap: number,
    rowRef: RefObject<HTMLDivElement>,
    hashRef: RefObject<HTMLAnchorElement | HTMLSpanElement>,
    copyButtonRef: RefObject<HTMLButtonElement>,
): number {
    const [autoLength, setAutoLength] = useState(hash.length);

    useEffect(() => {
        setAutoLength(hash.length);
    }, [hash]);

    const setAddressLength = useCallback(
        (rowE: Element) => {
            if (hashRef.current) {
                const rowWidth = rowE.clientWidth;
                const addressWidth = hashRef.current?.clientWidth || 0;
                const copyButtonWidth = copyButtonRef.current?.clientWidth || 0;
                const gapWidth = copyButtonWidth ? gap : 0;

                const computedWidth = Math.floor(
                    (autoLength * (rowWidth - gapWidth - copyButtonWidth)) / addressWidth,
                );
                const newLength = Math.max(Math.min(computedWidth, hash.length), 1);

                if (newLength > autoLength + 1 || newLength < autoLength) {
                    setAutoLength(newLength);
                }
            }
        },
        [hash, gap, hashRef, copyButtonRef, autoLength],
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
