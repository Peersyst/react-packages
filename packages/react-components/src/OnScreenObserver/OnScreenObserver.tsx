import { createRef, useCallback, useEffect, useState } from "react";
import { OnScreenObserverProps } from "./OnScreenObserver.types";
import { OnScreenObserverWrapper } from "./OnScreenObserver.styles";

export default function OnScreenObserver({
    children,
    offset = "0",
    container,
}: OnScreenObserverProps): JSX.Element {
    const [onScreen, setOnScreen] = useState(false);

    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: container?.current,
            rootMargin: "0px",
            threshold: 0.01,
        });
        ref.current?.children[0] && observer.observe(ref.current.children[0]);
        return () => {
            observer.disconnect();
        };
    }, [ref, children]);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[], { root }: IntersectionObserver) => {
            const child = entries[0];
            const { top, bottom } = root
                ? (root as Element).getBoundingClientRect()
                : { top: 0, bottom: window.innerHeight };

            if (
                !onScreen &&
                child.boundingClientRect.y <= bottom &&
                child.boundingClientRect.y >= top
            )
                setOnScreen(true);
            else if (
                onScreen &&
                (child.boundingClientRect.y > bottom || child.boundingClientRect.y < top)
            )
                setOnScreen(false);
        },
        [onScreen, setOnScreen, children],
    );

    return (
        <OnScreenObserverWrapper ref={ref} offset={offset}>
            {children(onScreen)}
        </OnScreenObserverWrapper>
    );
}
