import { CSSProperties, ReactNode } from "react";
import { ColorScheme } from "../Theme";

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
    appearance?: ColorScheme;
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
export type WithLoading<TProps> = TProps | (Partial<TProps> & { loading: boolean });

export type WithSkeletonProps = Omit<SkeletonProps, "loading" | "children">;
