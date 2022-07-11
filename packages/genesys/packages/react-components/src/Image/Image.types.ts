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
     * Skeleton props
     */
    SkeletonProps?: Omit<SkeletonProps, "children">;
    /**
     * Image className
     */
    className?: string;
    /**
     * Image style
     */
    style?: CSSProperties;
}
