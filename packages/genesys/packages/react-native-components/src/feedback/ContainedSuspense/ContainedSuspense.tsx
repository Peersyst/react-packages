import { ThemeColor, useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { Children } from "react";
import { Icon } from "../../display/Icon";
import { Spinner } from "../Spinner";
import {
    ContainedSuspenseContent,
    ContainedSuspenseLoader,
    ContainedSuspenseRoot,
} from "./ContainedSuspense.styles";
import { ContainedSuspenseProps } from "./ContainedSuspense.types";

const ContainedSuspense = (props: ContainedSuspenseProps) => {
    const {
        isLoading,
        children,
        fallback,
        activityIndicatorColor,
        activityIndicatorSize = "large",
        activityIndicatorAlignment = "center",
        style,
    } = useMergeDefaultProps("Suspense", props);

    const color =
        useColor((activityIndicatorColor as ThemeColor) || "text") || activityIndicatorColor;

    return (
        <ContainedSuspenseRoot style={style}>
            {isLoading && (
                <ContainedSuspenseLoader activityIndicatorAlignment={activityIndicatorAlignment}>
                    {fallback ? (
                        <Icon style={{ color }}>{fallback}</Icon>
                    ) : (
                        <Spinner color={activityIndicatorColor} size={activityIndicatorSize} />
                    )}
                </ContainedSuspenseLoader>
            )}
            <ContainedSuspenseContent
                isLoading={isLoading}
                style={{ justifyContent: style?.["justifyContent"] || "center" }}
            >
                {Children.only(children)}
            </ContainedSuspenseContent>
        </ContainedSuspenseRoot>
    );
};

export default ContainedSuspense;
