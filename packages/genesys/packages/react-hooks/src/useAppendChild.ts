import { useEffect, useState } from "react";

export default function useAppendChild(elementId: string): [HTMLDivElement, HTMLElement | null] {
    const [element] = useState<HTMLDivElement>(document.createElement("div"));
    const [container, setContainer] = useState<HTMLElement | null>(
        document.getElementById(elementId),
    );

    useEffect(() => {
        setContainer(document.getElementById(elementId));
        container?.appendChild(element);
        return () => {
            container?.removeChild(element);
        };
    }, [element, container, elementId]);

    return [element, container];
}
