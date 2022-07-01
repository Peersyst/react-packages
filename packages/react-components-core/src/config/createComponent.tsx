import { ComponentType } from "react";
import { useMergeDefaultProps } from "./hook";
import { ComponentsConfig } from "./config.types";

export default function <K extends keyof ComponentsConfig, P>(
    displayName: K,
    Component: ComponentType<P>,
): ComponentType<P> {
    function HigherOrderComponent(props: P): JSX.Element {
        const mergedProps = useMergeDefaultProps<K, P>(displayName, props);
        return <Component {...mergedProps} />;
    }
    HigherOrderComponent.displayName = displayName as string;
    return HigherOrderComponent;
}
