import { ImgHTMLAttributes } from "react";
import { SkeletonProps } from "../Skeleton";
import { Demand } from "@peersyst/react-types";

export interface ImageProps
    extends Demand<Omit<ImgHTMLAttributes<HTMLImageElement>, "loading" | "role">, "src" | "alt"> {
    /**
     * Image fallback
     */
    fallback?: string;
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
