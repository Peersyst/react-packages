import { useEffect, useState } from "react";

export interface UseImageSrcResult<SrcT, LoadEvent, ErrorEvent> {
    src: SrcT | undefined;
    handleLoad: (e: LoadEvent) => void;
    handleError: (e: ErrorEvent) => void;
    loaded: boolean;
    error: boolean;
    fallbackError: boolean;
}

export default function <SrcT, LoadEvent, ErrorEvent>(
    src: SrcT,
    fallback: SrcT,
    onLoad?: (e: LoadEvent) => void,
    onError?: (e: ErrorEvent) => void,
): UseImageSrcResult<SrcT, LoadEvent, ErrorEvent> {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [fallbackError, setFallbackError] = useState(false);

    useEffect(() => {
        if (loaded) setLoaded(false);
        if (error) setError(false);
        if (fallbackError) setFallbackError(false);
    }, [src]);

    useEffect(() => {
        if (error) setError(false);
        if (fallbackError) setFallbackError(false);
    }, [fallback]);

    const handleLoad = (e: LoadEvent) => {
        setLoaded(true);
        if (!error) onLoad?.(e);
    };

    const handleError = (e: ErrorEvent) => {
        if (!error) {
            setError(true);
            onError?.(e);
        } else {
            setFallbackError(true);
            setLoaded(true);
        }
    };

    const computedSrc = ((): SrcT | undefined => {
        if (!!src && !error) return src;
        else if (!fallbackError) return fallback;
        else return undefined;
    })();

    return {
        src: computedSrc,
        handleLoad,
        handleError,
        loaded,
        error,
        fallbackError,
    };
}
