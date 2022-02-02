import { useEffect, useState } from "react";

export default function <PageType, ReturnType>(
    pages: PageType[] = [],
    getItems: (page: PageType) => ReturnType[],
): ReturnType[] {
    const [items, setItems] = useState<ReturnType[]>([]);
    const [pagesLength, setPagesLength] = useState(0);

    useEffect(() => {
        setItems((previousItems) => {
            let newItems: ReturnType[] = [];
            const newPages = pages.slice(pagesLength);
            newPages.forEach((page) => (newItems = newItems.concat(getItems(page))));
            setPagesLength(pages.length);
            return [...previousItems, ...newItems];
        });
    }, [pages.length]);

    return items;
}
