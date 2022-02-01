import { InfiniteScrollProps } from "./InfiniteScroll.types";
import { InfiniteScrollLoader } from "./InfiniteScroll.styles";
import { OnScreenObserver } from "../OnScreenObserver";

const InfiniteScroll = ({
    children,
    endElement,
    end: endProp,
    loading,
    loaderElement,
    callback,
    observerOffset = "200px",
}: InfiniteScrollProps): JSX.Element => {
    const end = !loading && endProp;
    return (
        <>
            {children}
            {!end && <InfiniteScrollLoader visible={loading}>{loaderElement}</InfiniteScrollLoader>}
            {end && endElement}
            {!end && (
                <OnScreenObserver offset={observerOffset}>
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
