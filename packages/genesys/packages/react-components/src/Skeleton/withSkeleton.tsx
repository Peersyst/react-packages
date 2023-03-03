import { JSXElementConstructor } from "react";
import Skeleton from "./Skeleton";
import { WithLoading, WithSkeletonProps } from "./Skeleton.types";

export function withSkeleton<TProps = {}>(
    WrappedComponent: JSXElementConstructor<TProps>,
    skeletonProps?: WithSkeletonProps,
): JSXElementConstructor<WithLoading<TProps>> {
    return ({ loading = false, ...componentProps }: WithLoading<TProps>) => {
        return (
            <Skeleton loading={loading} {...skeletonProps}>
                <WrappedComponent loading={loading} {...(componentProps as TProps)} />
            </Skeleton>
        );
    };
}
