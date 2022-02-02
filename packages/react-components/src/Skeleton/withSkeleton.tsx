import { ComponentType } from "react";
import Skeleton from "./Skeleton";
import { WithLoading, WithSkeletonProps } from "./Skeleton.types";

export function withSkeleton<TProps = Record<string, never>>(
    WrappedComponent: ComponentType<TProps>,
    skeletonProps?: WithSkeletonProps,
): ComponentType<WithLoading<TProps>> {
    // eslint-disable-next-line react/display-name
    return ({ loading = false, ...componentProps }: WithLoading<any>) => {
        return (
            <Skeleton loading={loading} {...skeletonProps}>
                <WrappedComponent loading={loading} {...componentProps} />
            </Skeleton>
        );
    };
}
