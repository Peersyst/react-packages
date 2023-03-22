import { Skeleton } from "../Skeleton";
import { ImageProps } from "./Image.types";
import { StyledImg } from "./Image.styles";
import { cx } from "@peersyst/react-utils";
import { useImageSrc, useMergeDefaultProps } from "@peersyst/react-components-core";

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

    const { src, handleLoad, handleError, loaded } = useImageSrc(
        srcProp,
        fallback,
        onLoad,
        onError,
    );

    return (
        <Skeleton
            loading={!loaded || loading}
            className={className}
            style={style}
            {...SkeletonProps}
        >
            <StyledImg
                key={src}
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
