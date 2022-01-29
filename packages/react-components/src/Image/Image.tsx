import React, { useState } from "react";
import { Skeleton } from "../Skeleton";
import { ImageProps } from "./Image.types";
import { StyledImg } from "./Image.styles";
import { cx } from "../utils/cx";

export function Image({ src, alt, className, style, SkeletonProps }: ImageProps): JSX.Element {
    const [loaded, setLoaded] = useState(false);

    return (
        <Skeleton loading={!loaded} className={className} style={style} {...SkeletonProps}>
            <StyledImg src={src} alt={alt} onLoad={() => setLoaded(true)} className={cx("Image", className)} style={style} role="img" />
        </Skeleton>
    );
}
