import { RefObject, useEffect, useState } from "react";

export default function (
    active: boolean,
    address: string,
    gap: number,
    rowRef: RefObject<HTMLDivElement>,
    addressRef: RefObject<HTMLAnchorElement>,
    copyButtonRef: RefObject<HTMLButtonElement>,
): number {
    const [autoLength, setAutoLength] = useState(address.length);

    useEffect(() => {
        const setAddressLength = () => {
            if (rowRef.current && addressRef.current) {
                const rowWidth = rowRef.current.clientWidth;
                const addressWidth = addressRef.current.clientWidth;

                if (rowWidth !== addressWidth) {
                    setAutoLength((oldAutoLength) => {
                        const copyButtonWidth = copyButtonRef.current?.clientWidth || 0;
                        const computedWidth = Math.floor(
                            (oldAutoLength * (rowWidth - gap - copyButtonWidth)) / addressWidth,
                        );
                        return Math.max(Math.min(computedWidth, address.length), 1);
                    });
                }
            }
        };

        window.addEventListener("resize", setAddressLength);

        setAddressLength();
        return () => {
            window.removeEventListener("resize", setAddressLength);
        };
    }, [address, gap, addressRef, rowRef, copyButtonRef]);

    return autoLength;
}
