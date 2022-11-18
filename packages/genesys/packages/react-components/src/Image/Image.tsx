import { ReactEventHandler, useState } from "react";
import { Skeleton } from "../Skeleton";
import { ImageProps } from "./Image.types";
import { StyledImg } from "./Image.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Image(props: ImageProps): JSX.Element {
    const {
        src: srcProp,
        alt,
        className,
        style,
        SkeletonProps,
        onLoad,
        loading = false,
        loadingMode,
        fallback,
        onError,
        ...rest
    } = useMergeDefaultProps("Image", props);

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [fallbackError, setFallbackError] = useState(false);

    const handleLoad: ReactEventHandler<HTMLImageElement> = (e) => {
        setLoaded(true);
        if (!error) onLoad?.(e);
    };

    const handleError: ReactEventHandler<HTMLImageElement> = (e) => {
        if (!error) {
            setError(true);
            onError?.(e);
        } else {
            setFallbackError(true);
            setLoaded(true);
        }
    };

    const src = ((): string | undefined => {
        if (!error) return srcProp;
        else if (!fallbackError) return fallback;
        else return undefined;
    })();

    return (
        <Skeleton
            loading={!loaded || loading}
            className={className}
            style={style}
            {...SkeletonProps}
        >
            <StyledImg
                src={src}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                className={cx("Image", className)}
                style={style}
                role="img"
                loading={loadingMode}
                {...rest}
            />
        </Skeleton>
    );
}
