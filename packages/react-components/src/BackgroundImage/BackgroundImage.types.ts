import { Property } from "csstype";
import { ReactNode } from "react";

export interface BackgroundImageProps {
    /**
     * Source of the image
     */
    src: string;
    /**
     * Filter to be applied
     */
    filter?: Property.Background;
    /**
     * Children of the div
     */
    children?: ReactNode;
}
