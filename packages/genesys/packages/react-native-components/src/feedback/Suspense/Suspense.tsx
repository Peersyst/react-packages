import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Children } from "react";
import { Spinner } from "../Spinner";
import { SuspenseProps } from "./Suspense.types";

const Suspense = (props: SuspenseProps) => {
    const {
        isLoading,
        children,
        fallback,
        activityIndicatorColor,
        activityIndicatorSize = "large",
    } = useMergeDefaultProps("Suspense", props);

    const loaderComponent = fallback || (
        <Spinner color={activityIndicatorColor} size={activityIndicatorSize} />
    );
    const child = Children.only(children);

    return isLoading ? loaderComponent : child;
};

export default Suspense;
