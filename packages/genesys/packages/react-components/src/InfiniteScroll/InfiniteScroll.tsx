import { InfiniteScrollProps } from "./InfiniteScroll.types";
import { InfiniteScrollLoader } from "./InfiniteScroll.styles";
import { OnScreenObserver } from "../OnScreenObserver";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const InfiniteScroll = (props: InfiniteScrollProps): JSX.Element => {
    const {
        children,
        endElement,
        end: endProp,
        loading,
        loaderElement,
        callback,
        observerOffset = "10vh",
        container,
    } = useMergeDefaultProps("InfiniteScroll", props);

    const end = !loading && endProp;
    return (
        <>
            {children}
            {!end && (
                <InfiniteScrollLoader className="InfiniteScrollLoader" visible={loading}>
                    {loaderElement}
                </InfiniteScrollLoader>
            )}
            {end && endElement}
            {!end && (
                <OnScreenObserver offset={observerOffset} container={container}>
                    {(onScreen) => {
                        onScreen && !loading && callback();
                        return <div />;
                    }}
                </OnScreenObserver>
            )}
        </>
    );
};

export default InfiniteScroll;
