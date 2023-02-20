import { Children } from "react";
import { useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { Spinner } from "../Spinner";
import { SuspenseProps } from "./Suspense.types";
import { SuspenseContent, SuspenseLoader, SuspenseRoot } from "./Suspense.styles";
import { Icon } from "../../display/Icon";

const Suspense = (props: SuspenseProps) => {
    const {
        isLoading,
        children,
        fallback,
        activityIndicatorColor,
        activityIndicatorSize = "large",
        activityIndicatorAlignment = "center",
        style,
    } = useMergeDefaultProps("Suspense", props);

    const color = useColor(activityIndicatorColor || "text");

    return (
        <SuspenseRoot style={style}>
            {isLoading && (
                <SuspenseLoader activityIndicatorAlignment={activityIndicatorAlignment}>
                    {fallback ? (
                        <Icon style={{ color }}>{fallback}</Icon>
                    ) : (
                        <Spinner color={activityIndicatorColor} size={activityIndicatorSize} />
                    )}
                </SuspenseLoader>
            )}
            <SuspenseContent
                isLoading={isLoading}
                style={{ justifyContent: style?.["justifyContent"] || "center" }}
            >
                {Children.only(children)}
            </SuspenseContent>
        </SuspenseRoot>
    );
};

export default Suspense;
