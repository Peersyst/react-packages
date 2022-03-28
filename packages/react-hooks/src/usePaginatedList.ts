import { useMemo } from "react";

export default function <PageType, ReturnType>(
    pages: PageType[] = [],
    getItems: (page: PageType) => ReturnType[],
): ReturnType[] {
    return useMemo(() => {
        let items: ReturnType[] = [];
        pages.forEach((page) => (items = items.concat(getItems(page))));
        return items;
    }, [pages]);
}
