import { RefObject, useEffect, useState } from "react";

interface TabGroupSize {
    tabGroupWidth: number;
    tabGroupScrollLeft: number;
    tabGroupScrollWidth: number;
}

interface UseTabGroupSizeResult extends TabGroupSize {
    update: (newScroll: number) => unknown;
}

export function useTabGroupSize(tabGroupRef: RefObject<HTMLDivElement>): UseTabGroupSizeResult {
    const [tabGroupWidth, setTabGroupWidth] = useState<number>(0);
    const [tabGroupScrollLeft, setTabGroupScrollLeft] = useState<number>(0);
    const [tabGroupScrollWidth, setTabGroupScrollWidth] = useState<number>(0);

    const updateValues = (newScrollLeft?: number) => {
        const tabGroup = tabGroupRef?.current;
        if (tabGroup) {
            const width = Math.round(tabGroup.getBoundingClientRect().width) + 1;
            const scrollLeft = newScrollLeft || tabGroup.scrollLeft;
            const scrollWidth = tabGroup.scrollWidth;
            if (
                tabGroupScrollLeft !== scrollLeft ||
                (tabGroupWidth >= tabGroupScrollWidth && width < scrollWidth) ||
                (tabGroupWidth < tabGroupScrollWidth && width >= tabGroupWidth)
            ) {
                setTabGroupWidth(width);
                setTabGroupScrollLeft(scrollLeft);
                setTabGroupScrollWidth(scrollWidth);
            }
        }
    };

    const resizeHandler = () => updateValues();

    useEffect(() => {
        updateValues();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [tabGroupRef]);

    return {
        tabGroupWidth,
        tabGroupScrollLeft,
        tabGroupScrollWidth,
        update: updateValues,
    };
}
