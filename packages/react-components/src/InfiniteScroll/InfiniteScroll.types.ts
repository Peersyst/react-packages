import { ReactElement, ReactNode } from "react";

export interface InfiniteScrollProps {
    /**
     * Infinite scroll callback
     */
    callback: () => Promise<any> | any;
    /**
     * Observer offset
     */
    observerOffset?: string;
    /**
     * Call is loading
     */
    loading: boolean;
    /**
     * Loader to show on loading
     */
    loaderElement?: ReactElement;
    /**
     * No more items condition
     */
    end: boolean;
    /**
     * Element to show at the end when end is true
     */
    endElement?: ReactElement;
    /**
     * Infinite scroll content
     */
    children?: ReactNode;
}

export interface InfiniteScrollLoaderProps {
    visible: boolean;
}
