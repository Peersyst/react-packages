import { ImgHTMLAttributes } from "react";
import { SkeletonProps } from "../Skeleton";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading" | "role"> {
    /**
     * External loading
     */
    loading?: boolean;
    /**
     * img loading native prop
     */
    loadingMode?: ImgHTMLAttributes<HTMLImageElement>["loading"];
    /**
     * Skeleton props
     */
    SkeletonProps?: Omit<SkeletonProps, "children" | "loading">;
}
