import { useCallback, useEffect, useState } from "react";
import { InfiniteScrollProps } from "./InfiniteScroll.types";
import { InfiniteScrollLoader } from "./InfiniteScroll.styles";
import { OnScreenObserver } from "../OnScreenObserver";
import { debounce } from "@peersyst/react-utils";

const InfiniteScroll = ({
    children,
    endElement,
    end: endProp,
    loading,
    loaderElement,
    callback,
    observerOffset = "200px",
}: InfiniteScrollProps): JSX.Element => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        count && callback();
    }, [count, callback]);

    useEffect(() => {
        return incrementCount.clear();
    }, []);

    const incrementCount = useCallback(
        debounce(() => setCount((old) => old + 1), 250),
        [],
    );

    const end = !loading && endProp;
    return (
        <>
            {children}
            {!end && <InfiniteScrollLoader visible={loading}>{loaderElement}</InfiniteScrollLoader>}
            {end && endElement}
            {!end && (
                <OnScreenObserver offset={observerOffset}>
                    {(onScreen) => {
                        onScreen && !loading && incrementCount();
                        return <div />;
                    }}
                </OnScreenObserver>
            )}
        </>
    );
};

export default InfiniteScroll;
