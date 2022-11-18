import { CSSProperties } from "react";
import { SkeletonProps } from "../Skeleton";

export interface ImageProps {
    /**
     * Image source
     */
    src: string | undefined;
    /**
     * Image alt
     */
    alt: string;
    /**
     * External loading
     */
    loading?: boolean;
    /**
     * onLoad handler
     */
    onLoad?: () => void;
    /**
     * Skeleton props
     */
    SkeletonProps?: Omit<SkeletonProps, "children" | "loading">;
    /**
     * Image className
     */
    className?: string;
    /**
     * Image style
     */
    style?: CSSProperties;
}
