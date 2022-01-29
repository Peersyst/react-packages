import { createRef, useCallback, useEffect, useState } from "react";
import { OnScreenObserverProps } from "./OnScreenObserver.types";
import { OnScreenObserverWrapper } from "./OnScreenObserver.styles";

export function OnScreenObserver({ children, offset = "0" }: OnScreenObserverProps): JSX.Element {
    const [onScreen, setOnScreen] = useState(false);

    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, { root: null, rootMargin: "0px", threshold: 0.01 });
        ref.current?.children[0] && observer.observe(ref.current.children[0]);
        return () => {
            observer.disconnect();
        };
    }, [ref, children]);
    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const children = entries[0];
            if (!onScreen && children.boundingClientRect.y < window.innerHeight) setOnScreen(true);
            else if (onScreen && children.boundingClientRect.y >= window.innerHeight) setOnScreen(false);
        },
        [onScreen, setOnScreen, children],
    );

    return (
        <OnScreenObserverWrapper ref={ref} offset={offset}>
            {children(onScreen)}
        </OnScreenObserverWrapper>
    );
}
