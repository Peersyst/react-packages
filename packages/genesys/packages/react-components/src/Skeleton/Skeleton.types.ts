import { CSSProperties, ReactNode } from "react";
import { DeepPartial } from "@peersyst/react-types";

export type SkeletonShape = "circular" | "rectangular" | "stadium";
export type SkeletonAnimation = "wave" | "pulse" | false;

export interface SkeletonProps {
    /**
     * Skeleton width
     */
    width?: string;
    /**
     * Skeleton height
     */
    height?: string;
    /**
     * Skeleton shape
     */
    shape?: SkeletonShape;
    /**
     * Skeleton animation
     */
    animation?: SkeletonAnimation;
    /**
     * Is loading, skeleton is visible
     */
    loading?: boolean;
    /**
     * Skeleton appearance
     */
    appearance?: "light" | "dark";
    /**
     * Skeleton className
     */
    className?: string;
    /**
     * Skeleton style
     */
    style?: CSSProperties;
    /**
     * Skeleton content
     */
    children?: ReactNode;
}

export type WithSkeleton<T> = T & { loading?: boolean };
export type WithLoading<TProps> = TProps | (DeepPartial<TProps> & { loading: boolean });

export type WithSkeletonProps = Omit<SkeletonProps, "loading" | "children">;
