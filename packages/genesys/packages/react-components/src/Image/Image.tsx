import { ReactEventHandler, useState } from "react";
import { Skeleton } from "../Skeleton";
import { ImageProps } from "./Image.types";
import { StyledImg } from "./Image.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Image(props: ImageProps): JSX.Element {
    const {
        src,
        alt,
        className,
        style,
        SkeletonProps,
        onLoad,
        loading = false,
        loadingMode,
        ...rest
    } = useMergeDefaultProps("Image", props);

    const [loaded, setLoaded] = useState(false);

    const handleLoad: ReactEventHandler<HTMLImageElement> = (e) => {
        setLoaded(true);
        onLoad?.(e);
    };

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
                className={cx("Image", className)}
                style={style}
                role="img"
                loading={loadingMode}
                {...rest}
            />
        </Skeleton>
    );
}
